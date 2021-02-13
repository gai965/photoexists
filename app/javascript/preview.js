
if (document.URL.match(/new/)||document.URL.match(/edit/) ) {

  const header_html = (function () {
    const html = `<a href='/'>
                    <img class="second-logo" 
                         src="/assets/photo-logo-c820b55b2e257c0b1deecdb609a25b1d3d095fb0ace887e60af7bcd1c049abdd.png">
                    </a>`
    return html;
  }());

  function buildHTML(image) {
    const html = `<div id="preview">
                    <div class="preview-text">
                     プレビュー画像
                    </div>
                    <div class="img-box">
                      <img src=${image} id="img_preview" >
                    </div>
                  </div>`
    return html;
  }

  $(document).on('change','#img',function() {
    const imageContent = $('img');
    const previewText = $('.preview-text');
    const ImagePreview = $('.preview');
    const headerContent = $('.second-header');
    $(headerContent).append(header_html);
    
    if (imageContent){imageContent.remove();}
    if (previewText){previewText.remove();}

    const file = this.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      const image = this.result;
      const html = buildHTML(image);
      $(ImagePreview).append(html);
    }
  });
}