function criarBarra(var_nome, var_avatar) {
    var varStatus = document.createElement("span");
    varStatus.className = "status";
    var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
    
    var userBar = document.createElement("div");
    userBar.className = "user-bar";
  
    var backButton = document.createElement("div");
    backButton.className = "back";
    backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
  </svg>`;
  
    var avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.innerHTML = '<img src="'+var_avatar+'">';
  
    var name = document.createElement("div");
    name.className = "name";
    name.innerHTML = '<span>'+var_nome+'</span>&nbsp<span style="float: right" data-testid="psa-verified" data-icon="psa-verified" class=""><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 18 18" xml:space="preserve"><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>';
    
    name.appendChild(varStatus)
  
    var moreActions = document.createElement("div");
    moreActions.className = "actions more";
    // moreActions.innerHTML = '<i class="zmdi zmdi-more-vert"></i>';
  
    var attachmentAction = document.createElement("div");
    attachmentAction.className = "actions cam-action";
    attachmentAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
  </svg>`;
  
    var phoneAction = document.createElement("div"); // Alterado para um elemento de link <a>
    phoneAction.className = "actions phone-action";
    phoneAction.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
  </svg>`;
  
    userBar.appendChild(backButton);
    userBar.appendChild(avatar);
    userBar.appendChild(name);
    // userBar.appendChild(moreActions);
    userBar.appendChild(phoneAction);
    userBar.appendChild(attachmentAction);
  
    if (elementoPai) {
      elementoPai.prepend(userBar);
    }
  const botBody = elementoPai
  const userAvatar = botBody.querySelector('img[elementtiming="Bot avatar"]');
  const status = varStatus;
  
  const audioNot = document.createElement('audio');
  audioNot.src = 'https://github.com/igorlemoes/template_typebot_whatsapp/blob/main/audio_whatsapp.mp3';
  let mensagesLength = 0;
  
  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    const sibling = isTyping?.parentElement?.parentElement?.nextSibling;
  
    if(isTyping && sibling.src) {
      status.innerText = 'gravando audio...'
    } else if(isTyping) {      
      status.innerText = 'digitando...'
    } else {
      status.innerText = 'Online'
    }
  
  const allMessages = botBody.querySelector('.typebot-chat-view').querySelectorAll('.items-start.typebot-host-bubble');    
    
  if(allMessages.length > mensagesLength) {        
    if(!isTyping) {
      for (let i = mensagesLength; i < allMessages.length; i++) {
        const iconContainer = document.createElement('div');
        const checkIcon = `<svg id="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute; bottom: 0; right: 5px; z-index: 99" height="20" width="18">
          <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
            <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
            <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
          </g>
        </svg>`;
        iconContainer.innerHTML = checkIcon;
        
        const currentMsg = allMessages[i];
        currentMsg.append(iconContainer);
      }
      
      mensagesLength = allMessages.length;
      audioNot.play();        
    }
  }
  
  }, 400)
  
  var cssId = 'myCss';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdn.jsdelivr.net/gh/igorlemoes/template_typebot_whatsapp/whatsapp.css';
        link.media = 'all';
        head.appendChild(link);
    }
  }