export default () => {
    return {
        "value": "",
        "placeholder": "Another day, Another blog post. Get on that JusticeGrind!",
        "mode": "balloon-always",
        "stickyToolbar": "",
        "katex": "window.katex",
        "charCounter": true,
        "charCounterType": "char",
        "charCounterLabel": "Characters: ",
        "imageGalleryUrl": "",
        "videoFileInput": false,
        "tabDisable": false,
        "minHeight": "80vh",
        "height": "auto",
        "lineHeights": [
            {
                "text": "Single",
                "value": 1
            },
            {
                "text": "Double",
                "value": 2
            }
        ],
        "templates": [
            {
                "name": "Template-1",
                "html": "<p>HTML source1</p>"
            },
            {
                "name": "Template-2",
                "html": "<p>HTML source2</p>"
            }
        ],
        "buttonList": [
            [
                "undo",
                "redo",
                "font",
                "fontSize",
                "formatBlock",
                "paragraphStyle",
                "blockquote",
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "textStyle",
                "removeFormat",
                "outdent",
                "indent",
                "align",
                "horizontalRule",
                "list",
                "lineHeight",
                "table",
                "link",
                "image",
                "video",
                "audio",
                "math",
                "imageGallery",
                "fullScreen",
                "showBlocks",
                "codeView",
                "preview",
                "print",
                "save",
                "template"
            ]
        ],
        "lang(In nodejs)": "en",
        callBackSave: function (contents) {
            console.log(contents)
            // send to savedPosts database
        }
    };
}