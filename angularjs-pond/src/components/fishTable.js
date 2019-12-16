angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row> $ctrl.fishes.name</fish-table-row>
      <fish-table-row>$ctrl.fishes.image</fish-table-row>
      <fish-table-row>$ctrl.fishes.description</fish-table-row>
    </div>`
});