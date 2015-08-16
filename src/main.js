import {ValidateCustomAttributeViewStrategy} from 'aurelia-validation';
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-validation', (config) => { config.useViewStrategy(ValidateCustomAttributeViewStrategy.TWBootstrapAppendToMessage) });

  aurelia.start().then(a => a.setRoot());
}
