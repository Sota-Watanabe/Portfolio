export const worksData = [
  {
    name: "XenonText",
    imgPath: "images/xenontext.png",
    description:
      "XenonTextという名前のプログラミングエディタを3人で制作しました。複数のタブやコードのハイライト、保存や上書き保存など1通りの機能は利用できます。このときReactは触ったこともなかったためもう勉強しました。(今も勉強中です)\nエディタの部分はace-editorというJavaScript製のテキストエディタを利用しています。\n\nリリースページなどもあるので是非ご覧ください。",
    labels: ["React", "Redux", "electron", "tailwind.css"],
    teamDev: true,
    period: "ver0.2がリリース! 現在も機能追加のため開発中!",
    github: "https://github.com/cdlab-sit/XenonText",
    blog: "https://blog.so-ta.net/category/xenontext/",
    website: "https://cdlab-sit.github.io/XenonText/",
  },
  {
    name: "BBDC",
    imgPath: "images/moguchan.png",
    description:
      "大学のオープンキャンパスで制作したものです。先輩から仕様書っぽいものをもらい、それを元に仲間3人で制作しました。「分散コンピューティング」をお客さんに理解してもらうことを目的としています。\nサーバサイドではクライアントに割り当てるタスクを作成、割り当てを行います。そしてクライアントから結果が返ってくるとサーバサイドは達成度が上昇します。クライアントサイドではサーバから割り当てられたタスクを処理、結果を送信します。\n\n今回はお客さんにもわかりやすいようにこの分散コンピューティングを穴を掘るモグちゃんに表現しています。達成度が上がるにつれてモグちゃんは穴を掘り進め、処理が終了する際にはモグちゃんは宝を見つけ出します。\nこのスピードが1つの端末(クライアント)だと遅いが、複数端末を利用することで速くなることを実感してもらいました。",
    labels: ["python", "flask", "javascript", "HTML", "CSS"],
    teamDev: true,
    period: "1month",
    github: "https://github.com/cdlab-sit/BBDC",
    website: "https://cdlab-sit.github.io/BBDC/templates/description.html",
  },
  {
    name: "ポートフォリオ",
    imgPath: "images/portfolio.png",
    description:
      "このサイトです。\n同じ研究室の先輩がポートフォリオを作成していて、かっけえと思ったので作成してみました。今まで開発物のデザインは仲間に任せていたのですが、今回は自分の力だけで作ろうと思ったので、全て自分で制作しました。\nまたCI/CDもちゃんとしようということで初めて GitHub Pages、GitHub Actions を利用しました。\n加えて以前から使ってみたかったMaterial-UI にも挑戦してみました。\n自分を表現するものを制作するのはとても楽しかったです。",
    labels: ["React", "Material-UI", "Github Pages", "Github Actions"],
    teamDev: false,
    period: "1month",
    github: "https://github.com/Sota-Watanabe/Portfolio",
    blog: "https://blog.so-ta.net/category/portfolio/",
  },
  {
    name: "卒業研究紹介サイト",
    imgPath: "images/thesis-site.png",
    description:
      "学部時代の卒業研究について紹介するサイトです。具体的には卒業研究の梗概と卒業論文、最終発表に利用した発表資料を公開してあります。\nこのサイトを作成した理由は3つあります。\n1つは自分の卒業研究を公開したかったからです。大学生活の1年間という時間を丸々使った研究であり、賞も受賞できたということで満足のいく研究だったと思います。2つ目の理由として、Vue.jsを触ってみたかったというのがあります。Vue.jsはReactとの違いが多々あって面白かったです。Reactと違ってHTMLとJSがしっかり別れているのがいいですね。\n今回使ったのはVue2でしたので次はVue3に挑戦してみたいと思います。3つ目はAWSを使ってみたかったからです。AWSにはいろんなサービスがあってとても便利ですね。今回は「静的ウェブサイトをサブドメインで公開」してみました。（詳細はブログをご覧ください）これからはもっとAWSを使いたいと思います。",
    labels: ["Vue.js", "Vuetify", "Amazon Web Services", "GitHub Actions"],
    teamDev: false,
    period: "2week",
    github: "https://github.com/Sota-Watanabe/thesis-site",
    blog: "https://blog.so-ta.net/category/thesis-site/",
    website: "https://thesis.so-ta.net/",
  },
  {
    name: "ピクコレ",
    imgPath: "images/picture_collector.png",
    description:
      "Picture-Collector(ピクチャーコレクター)、通称ピクコレです。\nこれは自分以外の人と簡単に画像を共有することができるサービスです。Slackbotであるピクコレに画像をアップロードすると、ピクコレを起動しているサーバに画像が保存されます。画像が保存されるディレクリをフォトフレームスライドショーの対象ディレクトリにすることで画像をスライドショーとして楽しめます。これを研究室などのディスプレイに接続することで自分の趣味などを共有することができます。",
    labels: ["python", "flask", "slackbot", "RaspberryPi"],
    teamDev: false,
    period: "1week",
    github: "https://github.com/Sota-Watanabe/picture-collector",
  },
  {
    name: "キーボード",
    imgPath: "images/keyboard.png",
    description:
      "大学のイベントで作成したものです。\nプログラミングキーボードを押すと、ピアノの鍵盤が動きます。大学でDisklavierという自動演奏ピアノを使って何かを作れと言われてので作ってみました。プログラミングキーボードのキーが押すと、midi信号をピアノに送り、ピアノを動かしています。また「SIT in Tamachi」と入力すると某コンビニ曲が弾けるようなモードも作成してみました。詳細はブログとGitHubの方に書きましたのでどうぞご覧ください。",
    labels: ["python", "flask", "midi", "piano"],
    teamDev: false,
    period: "1week",
    blog: "https://blog.so-ta.net/play/pc-keyboard-piano/",
    github: "https://github.com/Sota-Watanabe/keyboard",
  },
];
