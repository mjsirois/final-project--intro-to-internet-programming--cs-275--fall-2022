const { src, dest, series, watch } = require(`gulp`),
    htmlValidator = require(`gulp-html`),
    CSSLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    htmlCompressor = require(`gulp-htmlmin`),
    cssCompressor = require(`gulp-clean-css`);

let validateHTML = () => {
    return src([`index.html`])
        .pipe(htmlValidator(undefined));
};

let lintCSS = () => {
    return src(`styles/main.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(
        [`scripts/*.js`, `*.js`])
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let compressHTML = () => {
    return src([`*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressCSS = () => {
    return src([`styles/main.css`])
        .pipe(cssCompressor({compatibility: `ie8`}))
        .pipe(dest(`prod/css`));
};

exports.validateHTML = validateHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;











