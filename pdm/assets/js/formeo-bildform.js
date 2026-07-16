'use strict';
export default function form(formeoOpts,type) {

  const isSite = (window.location.href.indexOf('draggable.github.io') !== -1);
  let container = document.querySelector('.build-formbuild-form-build');
  let renderContainer = document.querySelector('.render-formbuild-form-build');

  
  const formeo = new window.Formeo(formeoOpts);
  console.log(formeo);
  let editing = true;
  
  // let debugWrap = document.getElementById('debug-wrap');
  // let debugBtn = document.getElementById('debug-demo');
  let localeSelect = document.getElementById('locale');
  let toggleEdit = document.getElementById('renderForm');
  let viewDataBtn = document.getElementById('viewData');
  let resetDemo = document.getElementById('reloadBtn');
  
    // debugBtn.onclick = function() {
    //   debugWrap.classList.toggle('open');
    // };

  //elements
  
  
  // resetDemo.onclick = function() {
  //   window.sessionStorage.removeItem('formData');
  //   location.reload();
  // };
  if (type == 'viewData') {
    setTimeout(() => {
      document.body.classList.toggle('form-rendered', editing);
  
      // toggleEdit.click();
      formeo.render(renderContainer);
      return editing = !editing;    
    }, 500);
    // toggleEdit.onclick = evt => {
    //   document.body.classList.toggle('form-rendered', editing);
    //   formeo.render(renderContainer);
    //   // if (editing) {
    //   //   console.log(renderContainer);
    //   //   evt.target.innerHTML = 'Edit Form';
    //   // } else {
    //   //   evt.target.innerHTML = 'Render Form';
    //   // }
    
    //   // return editing = !editing;
    // };
  }
  
  // viewDataBtn.onclick = evt => {
  //   console.log(formeo.formData);
  // };

  let formeoLocale = window.sessionStorage.getItem('formeo-locale');
  if (formeoLocale) {
    localeSelect.value = formeoLocale;
  }

  if (localeSelect) {
    localeSelect.addEventListener('change', function() {
      window.sessionStorage.setItem('formeo-locale', localeSelect.value);
      formeo.i18n.setLang(localeSelect.value);
    });
    
  }
  
  const control = document.getElementById('control-filter')
  if (control) {
    control.addEventListener('input', function(e) {
      formeo.controls.actions.filter(e.target.value);
    });
  }
  
}
