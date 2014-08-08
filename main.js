if ( document.querySelectorAll('.commit-row-title').length == 1 ) {
  var title       = document.querySelector( '.commit-row-title .str-truncated a.commit-row-message' ).innerText;
  var description = document.querySelector( '.commit-row-description pre' ).innerText;

  document.querySelector( '#merge_request_title' ).value        = title;
  document.querySelector( '#merge_request_description' ).value  = description;
}
