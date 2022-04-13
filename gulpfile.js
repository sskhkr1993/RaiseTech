
const gulp = require("gulp"); //gulpプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));//Sassをコンパイルするプラグインの読み込み
const plumber = require("gulp-plumber"); //watch中にエラーが出ても止まらないようにする
const sassGlob = require("gulp-sass-glob-use-forward"); //glob機能を使って@useを省略する
const autoprefixer = require("gulp-autoprefixer"); //ベンダーフィックスを付与


gulp.task("default",function() { //style.scssタスクを作成("タスク名",実行される処理)

  //return gulp.watch("scss/layout/*.scss","scss/object/**/*.scss",function(){   //scssファイルを監視("監視するファイル",処理)

    //style.scssの更新があったら、style.scssをコンパイルする場合の処理
    return (gulp
      .src("scss/style.scss")  //style.scssファイルを取得

      .pipe(plumber()) //watch中にエラーが発生してもwatchが止まらないようにする
      .pipe(sassGlob()) //glob機能を使って@useを省略する
      .pipe( 
        sass({      //Sassのコンパイルを実行
          outputStyle: "expanded" //cssにコンパイルされるときに整形する
        })
        .on("error",sass.logError)  //sassのコンパイルエラーを表示.(これがないと自動的に止まってしまう）
      )
      .pipe(autoprefixer())       //ベンダープレフィックスを自動付与する

      .pipe(gulp.dest("css"))      //cssフォルダー以下に保存
    );
  });
//});

gulp.task('watch', function(){
  gulp.watch("scss/style.scss", gulp.task('default'));
  gulp.watch("scss/foundation/*.scss", gulp.task('default'));
  gulp.watch("scss/layout/*.scss", gulp.task('default'));
  gulp.watch("scss/object/**/*.scss", gulp.task('default'));
});

gulp.task('default',gulp.series('watch'));