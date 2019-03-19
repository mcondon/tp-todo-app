import path from 'path';
import process from 'process';
import Module from 'module';

const builtins = Module.builtinModules;

const JS_EXTENSIONS = new Set(['.js']);

const baseURL = new URL('file://');
baseURL.pathname = `${process.cwd()}/`;

export function resolve(specifier, parentModuleURL = baseURL, defaultResolve) {

  // builtins
  if (builtins.includes(specifier)) {
    return {
      url: specifier,
      format: 'builtin'
    };
  }

  // standard node modules
  if (/^\.{0,2}[/]/.test(specifier) !== true && !specifier.startsWith('file:')) {
    return defaultResolve(specifier, parentModuleURL);
  }

  const resolved = specifier.startsWith('/') && !specifier.startsWith(baseURL.pathname) ?
    new URL(baseURL + specifier.replace(/^\//,'')) :
    new URL(specifier, parentModuleURL);

  const ext = path.extname(resolved.pathname);

  if (!JS_EXTENSIONS.has(ext)) {
    throw new Error(
      `Cannot load file with non-JavaScript file extension ${ext}.`);
  }

  return {
    url: resolved.href,
    format: 'esm'
  };
}