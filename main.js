function Gitlab(){
  if ( Gitlab.isOnGitlabApp() && this.isMergeRequestForm() ){
    this.fillForm();
  }
}

Gitlab.isOnGitlabApp = function(){
  var description = document.querySelector( 'meta[name="description"]' );
  return description && description.content.match( /GitLab/ );
};

Gitlab.prototype.fillForm = function(){
  var title       = document.querySelector( '.commit-row-title .str-truncated a.commit-row-message' ).innerText;
  var description = document.querySelector( '.commit-row-description pre' ).innerText;

  document.querySelector( '#merge_request_title' ).value        = title;
  document.querySelector( '#merge_request_description' ).value  = description;
};

Gitlab.prototype.isMergeRequestForm = function(){
  return document.querySelector( '#merge_request_title' ) && document.querySelector( '#merge_request_description' );
};


new Gitlab();

document.addEventListener( 'page:load', function(){
  new Gitlab();
}, false );
