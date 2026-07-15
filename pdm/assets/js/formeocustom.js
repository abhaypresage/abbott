'use strict';
export default function form(formeoOpts){

  const formeo = new window.Formeo({
    formeoOpts
		});


  // var formeo = new window.FormeoRenderer();
formeo.render({"id":"9a3f53fc-7c17-4245-9a11-c61dbff11f20","stages":{"f322aeea-5e10-4dd4-bb5b-3fd9e0c04192":{"children":["eaf8966f-07f9-4150-bc4e-37cfc1f9fba3","336cae17-0e29-43fd-afcc-99f5ad6010d0"],"id":"f322aeea-5e10-4dd4-bb5b-3fd9e0c04192"}},"rows":{"eaf8966f-07f9-4150-bc4e-37cfc1f9fba3":{"config":{"fieldset":false,"legend":"","inputGroup":false},"children":["b8f90008-18eb-408d-bfe9-00c5e667bf44"],"className":["formeo-row"],"id":"eaf8966f-07f9-4150-bc4e-37cfc1f9fba3"},"336cae17-0e29-43fd-afcc-99f5ad6010d0":{"config":{"fieldset":false,"legend":"","inputGroup":false},"children":["29be59b2-af7b-4684-bdc8-053074049d19"],"className":["formeo-row"],"id":"336cae17-0e29-43fd-afcc-99f5ad6010d0"}},"columns":{"b8f90008-18eb-408d-bfe9-00c5e667bf44":{"config":{"width":"100%"},"children":["56b7e40a-818f-4f9d-af5c-16ce77f85771"],"className":"formeo-column","id":"b8f90008-18eb-408d-bfe9-00c5e667bf44"},"29be59b2-af7b-4684-bdc8-053074049d19":{"config":{"width":"100%"},"children":["de6437ad-84eb-4be8-be7e-c5b52f884ccf","34b7125d-ccb2-417e-8047-8415dc375f28"],"className":"formeo-column","id":"29be59b2-af7b-4684-bdc8-053074049d19"}},"fields":{"56b7e40a-818f-4f9d-af5c-16ce77f85771":{"conditions":[{"if":[{"source":"fields.56b7e40a-818f-4f9d-af5c-16ce77f85771","sourceProperty":"value","comparison":"equals","target":"radio-2","targetProperty":"isVisible"}],"then":[{"target":"fields.de6437ad-84eb-4be8-be7e-c5b52f884ccf","targetProperty":"isVisible","assignment":"equals","value":""}]}],"tag":"input","attrs":{"type":"radio","required":false},"config":{"label":"Radio Group","disabledAttrs":["type"]},"meta":{"group":"common","icon":"radio-group","id":"radio"},"options":[{"label":"Radio 1","value":"radio-1","selected":false},{"label":"Radio 2","value":"radio-2","selected":false},{"label":"Radio 3","value":"radio-3","selected":false}],"id":"56b7e40a-818f-4f9d-af5c-16ce77f85771"},"de6437ad-84eb-4be8-be7e-c5b52f884ccf":{"conditions":[{"if":[{"source":"","sourceProperty":"value","comparison":"equals","target":"","targetProperty":"value"}],"then":[{"target":"","targetProperty":"value","assignment":"equals","value":""}]}],"tag":"textarea","config":{"label":"TextArea"},"meta":{"group":"common","icon":"textarea","id":"textarea"},"attrs":{"required":false},"id":"de6437ad-84eb-4be8-be7e-c5b52f884ccf"},"34b7125d-ccb2-417e-8047-8415dc375f28":{"conditions":[{"if":[{"source":"","sourceProperty":"value","comparison":"equals","target":"","targetProperty":"value"}],"then":[{"target":"","targetProperty":"value","assignment":"equals","value":""}]}],"tag":"input","attrs":{"required":false,"type":"text","className":""},"config":{"label":"Text Input"},"meta":{"group":"common","icon":"text-input","id":"text-input"},"id":"34b7125d-ccb2-417e-8047-8415dc375f28"}}})
}
// export default function form(formeoOpts,type) {

//   const isSite = (window.location.href.indexOf('draggable.github.io') !== -1);
//   let container = document.querySelector('.build-form');
//   let renderContainer = document.querySelector('.render-form');

  
//   const formeo = new window.Formeo(formeoOpts);
//   let editing = true;
  
//   // let debugWrap = document.getElementById('debug-wrap');
//   // let debugBtn = document.getElementById('debug-demo');
//   let localeSelect = document.getElementById('locale');
//   let toggleEdit = document.getElementById('renderForm');
//   let viewDataBtn = document.getElementById('viewData');
//   let resetDemo = document.getElementById('reloadBtn');
  
//     // debugBtn.onclick = function() {
//     //   debugWrap.classList.toggle('open');
//     // };

//   //elements
  
  
//   // resetDemo.onclick = function() {
//   //   window.sessionStorage.removeItem('formData');
//   //   location.reload();
//   // };
//   if (type == 'viewData') {
//     setTimeout(() => {
//       document.body.classList.toggle('form-rendered', editing);
  
//       // toggleEdit.click();
//       formeo.render(renderContainer);
//       return editing = !editing;    
//     }, 500);
//     toggleEdit.onclick = evt => {
//       document.body.classList.toggle('form-rendered', editing);
//       formeo.render(renderContainer);
//       // if (editing) {
//       //   console.log(renderContainer);
//         evt.target.innerHTML = 'Edit Form';
//       // } else {
//       //   evt.target.innerHTML = 'Render Form';
//       // }
    
//       // return editing = !editing;
//     };
//   }
//   console.log('viewDataBtn');
//   // viewDataBtn.onclick = evt => {
//     console.log(formeo.formData);
//   // };

//   let formeoLocale = window.sessionStorage.getItem('formeo-locale');
//   if (formeoLocale) {
//     localeSelect.value = formeoLocale;
//   }

//   if (localeSelect) {
//     localeSelect.addEventListener('change', function() {
//       window.sessionStorage.setItem('formeo-locale', localeSelect.value);
//       formeo.i18n.setLang(localeSelect.value);
//     });
    
//   }
  
//   const control = document.getElementById('control-filter')
//   if (control) {
//     control.addEventListener('input', function(e) {
//       formeo.controls.actions.filter(e.target.value);
//     });
//   }
  
// }

