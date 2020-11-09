var bigBox = document.querySelector('#bigBox');

var inputBox = document.querySelector('#inputBox');

var addBtn = document.querySelector('#addButton');

closeId = 0;

addBtn.addEventListener('click', function () {
    closeId += 1;
    var html = document.createElement('div');
    html.setAttribute('id', 'Note');
    html.setAttribute('class', 'col-12 pr-0');
    html.innerHTML = `<div class="input-group mb-3 d-flex justify-content-between align-items-center p-0">
      <div class="row p-0">
      <div class="input-group-prepend pl-3 edit-container-${closeId}">
        <button class="btn" id="edit-${closeId}" style="background-color: white;">
        <i class="fad fa-edit" style="font-size: 35px; color: green"></i>
        </button>
      </div>
      <span id="noteText-${closeId}" style="padding-left: 20px; color: #305251; font-size: 24px">${inputBox.value}</span>
      </div>
      <div class="input-group-prepend">
      <button id="completeBtn-${closeId}" class="btn p-0" style="background-color: white;">
        
        <i class="fad fa-check" style="font-size: 35px; color: #15aabf"></i>
        </button>
        <button id="close-${closeId}" class="btn p-0" style="background-color: white;">
          <i class="fad fa-times" style="font-size: 35px; color: #ff494c"></i>
        </button>
        
      </div>
    </div>
    <hr />`
    bigBox.appendChild(html);
    var closeBtn = document.querySelector(`#close-${closeId}`);
    closeBtn.addEventListener('click', function () {
        var x = closeBtn.closest('#Note')   ;
        x.remove();
    });
    var editBtn = document.querySelector(`#edit-${closeId}`);
    editBtn.addEventListener('click', function () {
      var span_previous=document.querySelector(`#noteText-${closeId}`);
      var note = editBtn.closest('#Note')   ;
      var edit_html = document.createElement('div');
      edit_html.setAttribute('id', 'Edit');
      edit_html.setAttribute('class', 'col-12 pr-0');
      edit_html.innerHTML = `<div class="input-group mb-3 d-flex justify-content-between align-items-center p-0">
        <div class="row p-0">
        <input type="text" id="noteEdit-${closeId}" class="edit-input" style="padding-left: 20px; color: #305251; font-size: 24px" value="${inputBox.value}"></input>
        </div>
        <div class="input-group-prepend">
        <button id="completeEdit-${closeId}" class="btn p-0" style="background-color: white;">
          
          <i class="fad fa-check" style="font-size: 35px; color: #15aabf"></i>
          </button>
          <button id="closeEdit-${closeId}" class="btn p-0" style="background-color: white;">
            <i class="fad fa-times" style="font-size: 35px; color: #ff494c"></i>
          </button>
          
        </div>
      </div>
      <hr />`
      note.parentNode.replaceChild(edit_html, note);
      var completeEdit = document.querySelector(`#completeEdit-${closeId}`);
      var span_edit=document.querySelector(`#noteEdit-${closeId}`);
      completeEdit.addEventListener('click', function () {
        edit_html.parentNode.replaceChild(note, edit_html);
        span_previous.innerHTML=span_edit.value;
    });
    var closeEdit = document.querySelector(`#closeEdit-${closeId}`);
    closeEdit.addEventListener('click', function () {
        edit_html.parentNode.replaceChild(note, edit_html);
    });
    });
    var completeBtn = document.querySelector(`#completeBtn-${closeId}`);
    completeBtn.addEventListener('click', function () {
        var x = document.querySelector(`#noteText-${closeId}`);
        if(x.classList.contains('complete')){
            x.classList.remove('complete');
        }
        else{
            x.classList.add('complete');
        }
    });
});





