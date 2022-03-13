import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { NgAddOptions } from './schema';
import { getMajorNpmVersion, getPkgVersionFromPackageJson } from './utils';

export default ({fallbackLocale, translate, datetime}: NgAddOptions): Rule => (tree: Tree, context: SchematicContext) => {
  let izationVersion = getPkgVersionFromPackageJson(tree, '@ization/core') ?? 'latest';

  let npmVersion = getMajorNpmVersion();
  if (npmVersion && npmVersion <= 6) {
    console.warn('WARN: Your npm version is <=6. You will need to install some peer dependencies yourself. Please pay attention to "npm install" output or have a look at Readme of each particular ization package.');
  }

  if (translate) {
    context.addTask(new NodePackageInstallTask({packageName: `@ization/translate@${izationVersion}`}));
  }
  if (datetime) {
    context.addTask(new NodePackageInstallTask({packageName: `@ization/${datetime}@${izationVersion}`}));
  }

  if (fallbackLocale) {
    console.log('@TODO Angular CLI should automatically add some code to your project now. Unfortunately this is not implemented yet :(');
  }

  return tree;
};
