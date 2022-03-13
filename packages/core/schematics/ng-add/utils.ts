import { execSync } from 'child_process';
import { Tree } from '@angular-devkit/schematics';

export function getPkgVersionFromPackageJson(tree: Tree, name: string): string | undefined {
  if (!tree.exists('package.json')) {
    return undefined;
  }

  let json = JSON.parse(tree.read('package.json')!.toString('utf8')) as {dependencies?: Record<string, string>};
  return json.dependencies?.[name];
}

export function getMajorNpmVersion(): number | undefined {
  try {
    return Number(
      execSync('npm --version', { encoding: 'utf8', stdio: 'pipe' })
        .trim()
        .match(/\d+/)
        ?.[0]
    );
  } catch {
    // npm not available
    return undefined;
  }
}
