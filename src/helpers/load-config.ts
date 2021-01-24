import { Logger } from '@nestjs/common';
import { existsSync, readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { merge } from 'lodash';
import { join } from 'path';
import { fullObj } from './print';

export default () => {
  const env = process.env.NODE_ENV

  const root = join(__dirname, "../..")

  const configFiles = [
    "config/application.yml",
    "config/application.local.yml",
    `config/application.${env}.yml`,
    `config/application.${env}.local.yml`,
  ]

  const yamls = configFiles.map(file => {
    if (existsSync(join(root, file)))
      return yaml.load(readFileSync(join(root, file), { encoding: 'utf-8' })) as any
    else {
      Logger.debug(`config file not exists: ${file}`)
      return {}
    }
  })

  const result = yamls.reduce((a, b) => merge(a, b), {})
  Logger.debug(`config is ${fullObj(result)}`)

  return result
}