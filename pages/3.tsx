import Head from 'next/head'
import { NextPage } from 'next'
import { Badge, Image, Heading, Text } from '@chakra-ui/react'

const Post: NextPage = () => {
  return (
    <>
      <Head>
        <title>羅生門</title>
        <meta name="description" content="羅生門 芥川 竜之介" />
        <meta property="og:title" content="羅生門" />
        <meta property="og:description" content="羅生門 芥川 竜之介" />
        <meta property="og:url" content="https://nontan-next-chakra.vercel.app/3/" />
      </Head>
      <Image borderRadius="md" src="/img/akutagawa_ryunosuke.png" />
      <Heading as="h2" size="lg" mt={4}>
        羅生門
        <Badge ml={4} fontSize={{ base: '14px', lg: '16px' }}>
          芥川 竜之介
        </Badge>
      </Heading>
      <Text mt={4}>
        ある日の暮方の事である。一人の
        <ruby>
          下人<rp>（</rp>
          <rt>げにん</rt>
          <rp>）</rp>
        </ruby>
        が、
        <ruby>
          羅生門<rp>（</rp>
          <rt>らしょうもん</rt>
          <rp>）</rp>
        </ruby>
        の下で雨やみを待っていた。
        <br />
        広い門の下には、この男のほかに誰もいない。ただ、所々
        <ruby>
          丹塗<rp>（</rp>
          <rt>にぬり</rt>
          <rp>）</rp>
        </ruby>
        の
        <ruby>
          剥<rp>（</rp>
          <rt>は</rt>
          <rp>）</rp>
        </ruby>
        げた、大きな
        <ruby>
          円柱<rp>（</rp>
          <rt>まるばしら</rt>
          <rp>）</rp>
        </ruby>
        に、
        <ruby>
          蟋蟀<rp>（</rp>
          <rt>きりぎりす</rt>
          <rp>）</rp>
        </ruby>
        が一匹とまっている。羅生門が、
        <ruby>
          朱雀大路<rp>（</rp>
          <rt>すざくおおじ</rt>
          <rp>）</rp>
        </ruby>
        にある以上は、この男のほかにも、雨やみをする
        <ruby>
          市女笠<rp>（</rp>
          <rt>いちめがさ</rt>
          <rp>）</rp>
        </ruby>
        や
        <ruby>
          揉烏帽子<rp>（</rp>
          <rt>もみえぼし</rt>
          <rp>）</rp>
        </ruby>
        が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。
        <br />
        何故かと云うと、この二三年、京都には、地震とか
        <ruby>
          辻風<rp>（</rp>
          <rt>つじかぜ</rt>
          <rp>）</rp>
        </ruby>
        とか火事とか饑饉とか云う
        <ruby>
          災<rp>（</rp>
          <rt>わざわい</rt>
          <rp>）</rp>
        </ruby>
        がつづいて起った。そこで
        <ruby>
          洛中<rp>（</rp>
          <rt>らくちゅう</rt>
          <rp>）</rp>
        </ruby>
        のさびれ方は一通りではない。旧記によると、仏像や仏具を打砕いて、その
        <ruby>
          丹<rp>（</rp>
          <rt>に</rt>
          <rp>）</rp>
        </ruby>
        がついたり、金銀の
        <ruby>
          箔<rp>（</rp>
          <rt>はく</rt>
          <rp>）</rp>
        </ruby>
        がついたりした木を、路ばたにつみ重ねて、
        <ruby>
          薪<rp>（</rp>
          <rt>たきぎ</rt>
          <rp>）</rp>
        </ruby>
        の
        <ruby>
          料<rp>（</rp>
          <rt>しろ</rt>
          <rp>）</rp>
        </ruby>
        に売っていたと云う事である。洛中がその始末であるから、羅生門の修理などは、元より誰も捨てて顧る者がなかった。するとその荒れ果てたのをよい事にして、
        <ruby>
          狐狸<rp>（</rp>
          <rt>こり</rt>
          <rp>）</rp>
        </ruby>
        が
        <ruby>
          棲<rp>（</rp>
          <rt>す</rt>
          <rp>）</rp>
        </ruby>
        む。
        <ruby>
          盗人<rp>（</rp>
          <rt>ぬすびと</rt>
          <rp>）</rp>
        </ruby>
        が棲む。とうとうしまいには、引取り手のない死人を、この門へ持って来て、棄てて行くと云う習慣さえ出来た。そこで、日の目が見えなくなると、誰でも気味を悪るがって、この門の近所へは足ぶみをしない事になってしまったのである。
        <br />
        その代りまた
        <ruby>
          鴉<rp>（</rp>
          <rt>からす</rt>
          <rp>）</rp>
        </ruby>
        がどこからか、たくさん集って来た。昼間見ると、その鴉が何羽となく輪を描いて、高い
        <ruby>
          鴟尾<rp>（</rp>
          <rt>しび</rt>
          <rp>）</rp>
        </ruby>
        のまわりを啼きながら、飛びまわっている。ことに門の上の空が、夕焼けであかくなる時には、それが
        <ruby>
          胡麻<rp>（</rp>
          <rt>ごま</rt>
          <rp>）</rp>
        </ruby>
        をまいたようにはっきり見えた。鴉は、勿論、門の上にある死人の肉を、
        <ruby>
          啄<rp>（</rp>
          <rt>ついば</rt>
          <rp>）</rp>
        </ruby>
        みに来るのである。――もっとも今日は、
        <ruby>
          刻限<rp>（</rp>
          <rt>こくげん</rt>
          <rp>）</rp>
        </ruby>
        が遅いせいか、一羽も見えない。ただ、所々、崩れかかった、そうしてその崩れ目に長い草のはえた石段の上に、鴉の
        <ruby>
          糞<rp>（</rp>
          <rt>ふん</rt>
          <rp>）</rp>
        </ruby>
        が、点々と白くこびりついているのが見える。下人は七段ある石段の一番上の段に、洗いざらした紺の
        <ruby>
          襖<rp>（</rp>
          <rt>あお</rt>
          <rp>）</rp>
        </ruby>
        の尻を据えて、右の頬に出来た、大きな
        <ruby>
          面皰<rp>（</rp>
          <rt>にきび</rt>
          <rp>）</rp>
        </ruby>
        を気にしながら、ぼんやり、雨のふるのを眺めていた。
        <br />
        作者はさっき、「下人が雨やみを待っていた」と書いた。しかし、下人は雨がやんでも、格別どうしようと云う当てはない。ふだんなら、勿論、主人の家へ帰る可き筈である。所がその主人からは、四五日前に暇を出された。前にも書いたように、当時京都の町は一通りならず
        <ruby>
          衰微<rp>（</rp>
          <rt>すいび</rt>
          <rp>）</rp>
        </ruby>
        していた。今この下人が、永年、使われていた主人から、暇を出されたのも、実はこの衰微の小さな余波にほかならない。だから「下人が雨やみを待っていた」と云うよりも「雨にふりこめられた下人が、行き所がなくて、途方にくれていた」と云う方が、適当である。その上、今日の空模様も少からず、この平安朝の下人の
        Sentimentalisme に影響した。
        <ruby>
          申<rp>（</rp>
          <rt>さる</rt>
          <rp>）</rp>
        </ruby>
        の
        <ruby>
          刻<rp>（</rp>
          <rt>こく</rt>
          <rp>）</rp>
        </ruby>
        <ruby>
          下<rp>（</rp>
          <rt>さが</rt>
          <rp>）</rp>
        </ruby>
        りからふり出した雨は、いまだに上るけしきがない。そこで、下人は、何をおいても差当り
        <ruby>
          明日<rp>（</rp>
          <rt>あす</rt>
          <rp>）</rp>
        </ruby>
        の暮しをどうにかしようとして――云わばどうにもならない事を、どうにかしようとして、とりとめもない考えをたどりながら、さっきから朱雀大路にふる雨の音を、聞くともなく聞いていたのである。
        <br />
        雨は、羅生門をつつんで、遠くから、ざあっと云う音をあつめて来る。夕闇は次第に空を低くして、見上げると、門の屋根が、斜につき出した
        <ruby>
          甍<rp>（</rp>
          <rt>いらか</rt>
          <rp>）</rp>
        </ruby>
        の先に、重たくうす暗い雲を支えている。
        <br />
        どうにもならない事を、どうにかするためには、手段を選んでいる
        <ruby>
          遑<rp>（</rp>
          <rt>いとま</rt>
          <rp>）</rp>
        </ruby>
        はない。選んでいれば、
        <ruby>
          築土<rp>（</rp>
          <rt>ついじ</rt>
          <rp>）</rp>
        </ruby>
        の下か、道ばたの土の上で、
        <ruby>
          饑死<rp>（</rp>
          <rt>うえじに</rt>
          <rp>）</rp>
        </ruby>
        をするばかりである。そうして、この門の上へ持って来て、犬のように棄てられてしまうばかりである。選ばないとすれば――下人の考えは、何度も同じ道を
        <ruby>
          低徊<rp>（</rp>
          <rt>ていかい</rt>
          <rp>）</rp>
        </ruby>
        した
        <ruby>
          揚句<rp>（</rp>
          <rt>あげく</rt>
          <rp>）</rp>
        </ruby>
        に、やっとこの局所へ
        <ruby>
          逢着<rp>（</rp>
          <rt>ほうちゃく</rt>
          <rp>）</rp>
        </ruby>
        した。しかしこの「すれば」は、いつまでたっても、結局「すれば」であった。下人は、手段を選ばないという事を肯定しながらも、この「すれば」のかたをつけるために、当然、その後に来る可き「
        <ruby>
          盗人<rp>（</rp>
          <rt>ぬすびと</rt>
          <rp>）</rp>
        </ruby>
        になるよりほかに仕方がない」と云う事を、積極的に肯定するだけの、勇気が出ずにいたのである。
        <br />
        下人は、大きな
        <ruby>
          嚔<rp>（</rp>
          <rt>くさめ</rt>
          <rp>）</rp>
        </ruby>
        をして、それから、
        <ruby>
          大儀<rp>（</rp>
          <rt>たいぎ</rt>
          <rp>）</rp>
        </ruby>
        そうに立上った。夕冷えのする京都は、もう
        <ruby>
          火桶<rp>（</rp>
          <rt>ひおけ</rt>
          <rp>）</rp>
        </ruby>
        が欲しいほどの寒さである。風は門の柱と柱との間を、夕闇と共に遠慮なく、吹きぬける。
        <ruby>
          丹塗<rp>（</rp>
          <rt>にぬり</rt>
          <rp>）</rp>
        </ruby>
        の柱にとまっていた
        <ruby>
          蟋蟀<rp>（</rp>
          <rt>きりぎりす</rt>
          <rp>）</rp>
        </ruby>
        も、もうどこかへ行ってしまった。
        <br />
        下人は、
        <ruby>
          頸<rp>（</rp>
          <rt>くび</rt>
          <rp>）</rp>
        </ruby>
        をちぢめながら、
        <ruby>
          山吹<rp>（</rp>
          <rt>やまぶき</rt>
          <rp>）</rp>
        </ruby>
        の
        <ruby>
          汗袗<rp>（</rp>
          <rt>かざみ</rt>
          <rp>）</rp>
        </ruby>
        に重ねた、紺の
        <ruby>
          襖<rp>（</rp>
          <rt>あお</rt>
          <rp>）</rp>
        </ruby>
        の肩を高くして門のまわりを見まわした。雨風の
        <ruby>
          患<rp>（</rp>
          <rt>うれえ</rt>
          <rp>）</rp>
        </ruby>
        のない、人目にかかる
        <ruby>
          惧<rp>（</rp>
          <rt>おそれ</rt>
          <rp>）</rp>
        </ruby>
        のない、一晩楽にねられそうな所があれば、そこでともかくも、夜を明かそうと思ったからである。すると、幸い門の上の楼へ上る、幅の広い、これも丹を塗った
        <ruby>
          梯子<rp>（</rp>
          <rt>はしご</rt>
          <rp>）</rp>
        </ruby>
        が眼についた。上なら、人がいたにしても、どうせ死人ばかりである。下人はそこで、腰にさげた
        <ruby>
          聖柄<rp>（</rp>
          <rt>ひじりづか</rt>
          <rp>）</rp>
        </ruby>
        の
        <ruby>
          太刀<rp>（</rp>
          <rt>たち</rt>
          <rp>）</rp>
        </ruby>
        が
        <ruby>
          鞘走<rp>（</rp>
          <rt>さやばし</rt>
          <rp>）</rp>
        </ruby>
        らないように気をつけながら、
        <ruby>
          藁草履<rp>（</rp>
          <rt>わらぞうり</rt>
          <rp>）</rp>
        </ruby>
        をはいた足を、その梯子の一番下の段へふみかけた。
        <br />
        それから、何分かの後である。羅生門の楼の上へ出る、幅の広い梯子の中段に、一人の男が、猫のように身をちぢめて、息を殺しながら、上の
        <ruby>
          容子<rp>（</rp>
          <rt>ようす</rt>
          <rp>）</rp>
        </ruby>
        を窺っていた。楼の上からさす火の光が、かすかに、その男の右の頬をぬらしている。短い鬚の中に、赤く
        <ruby>
          膿<rp>（</rp>
          <rt>うみ</rt>
          <rp>）</rp>
        </ruby>
        を持った
        <ruby>
          面皰<rp>（</rp>
          <rt>にきび</rt>
          <rp>）</rp>
        </ruby>
        のある頬である。下人は、始めから、この上にいる者は、死人ばかりだと高を
        <ruby>
          括<rp>（</rp>
          <rt>くく</rt>
          <rp>）</rp>
        </ruby>
        っていた。それが、梯子を二三段上って見ると、上では誰か火をとぼして、しかもその火をそこここと動かしているらしい。これは、その濁った、黄いろい光が、隅々に
        <ruby>
          蜘蛛<rp>（</rp>
          <rt>くも</rt>
          <rp>）</rp>
        </ruby>
        の巣をかけた天井裏に、揺れながら映ったので、すぐにそれと知れたのである。この雨の夜に、この羅生門の上で、火をともしているからは、どうせただの者ではない。
        <br />
        下人は、
        <ruby>
          守宮<rp>（</rp>
          <rt>やもり</rt>
          <rp>）</rp>
        </ruby>
        のように足音をぬすんで、やっと急な梯子を、一番上の段まで這うようにして上りつめた。そうして体を出来るだけ、
        <ruby>
          平<rp>（</rp>
          <rt>たいら</rt>
          <rp>）</rp>
        </ruby>
        にしながら、頸を出来るだけ、前へ出して、恐る恐る、楼の内を
        <ruby>
          覗<rp>（</rp>
          <rt>のぞ</rt>
          <rp>）</rp>
        </ruby>
        いて見た。
        <br />
        見ると、楼の内には、噂に聞いた通り、幾つかの
        <ruby>
          死骸<rp>（</rp>
          <rt>しがい</rt>
          <rp>）</rp>
        </ruby>
        が、無造作に棄ててあるが、火の光の及ぶ範囲が、思ったより狭いので、数は幾つともわからない。ただ、おぼろげながら、知れるのは、その中に裸の死骸と、着物を着た死骸とがあるという事である。勿論、中には女も男もまじっているらしい。そうして、その死骸は皆、それが、かつて、生きていた人間だと云う事実さえ疑われるほど、土を
        <ruby>
          捏<rp>（</rp>
          <rt>こ</rt>
          <rp>）</rp>
        </ruby>
        ねて造った人形のように、口を
        <ruby>
          開<rp>（</rp>
          <rt>あ</rt>
          <rp>）</rp>
        </ruby>
        いたり手を延ばしたりして、ごろごろ床の上にころがっていた。しかも、肩とか胸とかの高くなっている部分に、ぼんやりした火の光をうけて、低くなっている部分の影を一層暗くしながら、永久に
        <ruby>
          唖<rp>（</rp>
          <rt>おし</rt>
          <rp>）</rp>
        </ruby>
        の如く黙っていた。
        <br />
        <ruby>
          下人<rp>（</rp>
          <rt>げにん</rt>
          <rp>）</rp>
        </ruby>
        は、それらの死骸の
        <ruby>
          腐爛<rp>（</rp>
          <rt>ふらん</rt>
          <rp>）</rp>
        </ruby>
        した臭気に思わず、鼻を
        <ruby>
          掩<rp>（</rp>
          <rt>おお</rt>
          <rp>）</rp>
        </ruby>
        った。しかし、その手は、次の瞬間には、もう鼻を掩う事を忘れていた。ある強い感情が、ほとんどことごとくこの男の嗅覚を奪ってしまったからだ。
        <br />
        下人の眼は、その時、はじめてその死骸の中に
        <ruby>
          蹲<rp>（</rp>
          <rt>うずくま</rt>
          <rp>）</rp>
        </ruby>
        っている人間を見た。
        <ruby>
          檜皮色<rp>（</rp>
          <rt>ひわだいろ</rt>
          <rp>）</rp>
        </ruby>
        の着物を着た、背の低い、
        <ruby>
          痩<rp>（</rp>
          <rt>や</rt>
          <rp>）</rp>
        </ruby>
        せた、
        <ruby>
          白髪頭<rp>（</rp>
          <rt>しらがあたま</rt>
          <rp>）</rp>
        </ruby>
        の、猿のような老婆である。その老婆は、右の手に火をともした松の
        <ruby>
          木片<rp>（</rp>
          <rt>きぎれ</rt>
          <rp>）</rp>
        </ruby>
        を持って、その死骸の一つの顔を覗きこむように眺めていた。髪の毛の長い所を見ると、多分女の死骸であろう。
        <br />
        下人は、六分の恐怖と四分の好奇心とに動かされて、
        <ruby>
          暫時<rp>（</rp>
          <rt>ざんじ</rt>
          <rp>）</rp>
        </ruby>
        は
        <ruby>
          呼吸<rp>（</rp>
          <rt>いき</rt>
          <rp>）</rp>
        </ruby>
        をするのさえ忘れていた。旧記の記者の語を借りれば、「
        <ruby>
          頭身<rp>（</rp>
          <rt>とうしん</rt>
          <rp>）</rp>
        </ruby>
        の毛も太る」ように感じたのである。すると老婆は、松の木片を、床板の間に挿して、それから、今まで眺めていた死骸の首に両手をかけると、丁度、猿の親が猿の子の
        <ruby>
          虱<rp>（</rp>
          <rt>しらみ</rt>
          <rp>）</rp>
        </ruby>
        をとるように、その長い髪の毛を一本ずつ抜きはじめた。髪は手に従って抜けるらしい。
        <br />
        その髪の毛が、一本ずつ抜けるのに従って、下人の心からは、恐怖が少しずつ消えて行った。そうして、それと同時に、この老婆に対するはげしい憎悪が、少しずつ動いて来た。――いや、この老婆に対すると云っては、
        <ruby>
          語弊<rp>（</rp>
          <rt>ごへい</rt>
          <rp>）</rp>
        </ruby>
        があるかも知れない。むしろ、あらゆる悪に対する反感が、一分毎に強さを増して来たのである。この時、誰かがこの下人に、さっき門の下でこの男が考えていた、
        <ruby>
          饑死<rp>（</rp>
          <rt>うえじに</rt>
          <rp>）</rp>
        </ruby>
        をするか
        <ruby>
          盗人<rp>（</rp>
          <rt>ぬすびと</rt>
          <rp>）</rp>
        </ruby>
        になるかと云う問題を、改めて持出したら、恐らく下人は、何の未練もなく、饑死を選んだ事であろう。それほど、この男の悪を憎む心は、老婆の床に挿した松の
        <ruby>
          木片<rp>（</rp>
          <rt>きぎれ</rt>
          <rp>）</rp>
        </ruby>
        のように、勢いよく燃え上り出していたのである。
        <br />
        下人には、勿論、何故老婆が死人の髪の毛を抜くかわからなかった。従って、合理的には、それを善悪のいずれに片づけてよいか知らなかった。しかし下人にとっては、この雨の夜に、この羅生門の上で、死人の髪の毛を抜くと云う事が、それだけで既に許すべからざる悪であった。勿論、下人は、さっきまで自分が、盗人になる気でいた事なぞは、とうに忘れていたのである。
        <br />
        そこで、下人は、両足に力を入れて、いきなり、梯子から上へ飛び上った。そうして
        <ruby>
          聖柄<rp>（</rp>
          <rt>ひじりづか</rt>
          <rp>）</rp>
        </ruby>
        の太刀に手をかけながら、大股に老婆の前へ歩みよった。老婆が驚いたのは云うまでもない。
        <br />
        老婆は、一目下人を見ると、まるで
        <ruby>
          弩<rp>（</rp>
          <rt>いしゆみ</rt>
          <rp>）</rp>
        </ruby>
        にでも
        <ruby>
          弾<rp>（</rp>
          <rt>はじ</rt>
          <rp>）</rp>
        </ruby>
        かれたように、飛び上った。
        <br />
        「おのれ、どこへ行く。」
        <br />
        下人は、老婆が死骸につまずきながら、慌てふためいて逃げようとする行手を
        <ruby>
          塞<rp>（</rp>
          <rt>ふさ</rt>
          <rp>）</rp>
        </ruby>
        いで、こう
        <ruby>
          罵<rp>（</rp>
          <rt>ののし</rt>
          <rp>）</rp>
        </ruby>
        った。老婆は、それでも下人をつきのけて行こうとする。下人はまた、それを行かすまいとして、押しもどす。二人は死骸の中で、しばらく、無言のまま、つかみ合った。しかし勝敗は、はじめからわかっている。下人はとうとう、老婆の腕をつかんで、無理にそこへ
        <ruby>
          捻<rp>（</rp>
          <rt>ね</rt>
          <rp>）</rp>
        </ruby>
        じ倒した。丁度、
        <ruby>
          鶏<rp>（</rp>
          <rt>にわとり</rt>
          <rp>）</rp>
        </ruby>
        の脚のような、骨と皮ばかりの腕である。
        <br />
        「何をしていた。云え。云わぬと、これだぞよ。」
        <br />
        下人は、老婆をつき放すと、いきなり、太刀の
        <ruby>
          鞘<rp>（</rp>
          <rt>さや</rt>
          <rp>）</rp>
        </ruby>
        を払って、白い
        <ruby>
          鋼<rp>（</rp>
          <rt>はがね</rt>
          <rp>）</rp>
        </ruby>
        の色をその眼の前へつきつけた。けれども、老婆は黙っている。両手をわなわなふるわせて、肩で息を切りながら、眼を、
        <ruby>
          眼球<rp>（</rp>
          <rt>めだま</rt>
          <rp>）</rp>
        </ruby>
        が
        <ruby>
          瞼<rp>（</rp>
          <rt>まぶた</rt>
          <rp>）</rp>
        </ruby>
        の外へ出そうになるほど、見開いて、唖のように
        <ruby>
          執拗<rp>（</rp>
          <rt>しゅうね</rt>
          <rp>）</rp>
        </ruby>
        く黙っている。これを見ると、下人は始めて明白にこの老婆の生死が、全然、自分の意志に支配されていると云う事を意識した。そうしてこの意識は、今までけわしく燃えていた憎悪の心を、いつの間にか冷ましてしまった。
        <ruby>
          後<rp>（</rp>
          <rt>あと</rt>
          <rp>）</rp>
        </ruby>
        に残ったのは、ただ、ある仕事をして、それが円満に成就した時の、安らかな得意と満足とがあるばかりである。そこで、下人は、老婆を見下しながら、少し声を柔らげてこう云った。
        <br />「
        <ruby>
          己<rp>（</rp>
          <rt>おれ</rt>
          <rp>）</rp>
        </ruby>
        は
        <ruby>
          検非違使<rp>（</rp>
          <rt>けびいし</rt>
          <rp>）</rp>
        </ruby>
        の庁の役人などではない。今し方この門の下を通りかかった旅の者だ。だからお前に
        <ruby>
          縄<rp>（</rp>
          <rt>なわ</rt>
          <rp>）</rp>
        </ruby>
        をかけて、どうしようと云うような事はない。ただ、今時分この門の上で、何をして居たのだか、それを己に話しさえすればいいのだ。」
        <br />
        すると、老婆は、見開いていた眼を、一層大きくして、じっとその下人の顔を見守った。
        <ruby>
          瞼<rp>（</rp>
          <rt>まぶた</rt>
          <rp>）</rp>
        </ruby>
        の赤くなった、肉食鳥のような、鋭い眼で見たのである。それから、皺で、ほとんど、鼻と一つになった唇を、何か物でも噛んでいるように動かした。細い喉で、尖った
        <ruby>
          喉仏<rp>（</rp>
          <rt>のどぼとけ</rt>
          <rp>）</rp>
        </ruby>
        の動いているのが見える。その時、その喉から、
        <ruby>
          鴉<rp>（</rp>
          <rt>からす</rt>
          <rp>）</rp>
        </ruby>
        の啼くような声が、
        <ruby>
          喘<rp>（</rp>
          <rt>あえ</rt>
          <rp>）</rp>
        </ruby>
        ぎ喘ぎ、下人の耳へ伝わって来た。
        <br />
        「この髪を抜いてな、この髪を抜いてな、
        <ruby>
          鬘<rp>（</rp>
          <rt>かずら</rt>
          <rp>）</rp>
        </ruby>
        にしようと思うたのじゃ。」
        <br />
        下人は、老婆の答が存外、平凡なのに失望した。そうして失望すると同時に、また前の憎悪が、冷やかな
        <ruby>
          侮蔑<rp>（</rp>
          <rt>ぶべつ</rt>
          <rp>）</rp>
        </ruby>
        と一しょに、心の中へはいって来た。すると、その
        <ruby>
          気色<rp>（</rp>
          <rt>けしき</rt>
          <rp>）</rp>
        </ruby>
        が、先方へも通じたのであろう。老婆は、片手に、まだ死骸の頭から奪った長い抜け毛を持ったなり、
        <ruby>
          蟇<rp>（</rp>
          <rt>ひき</rt>
          <rp>）</rp>
        </ruby>
        のつぶやくような声で、口ごもりながら、こんな事を云った。
        <br />
        「成程な、
        <ruby>
          死人<rp>（</rp>
          <rt>しびと</rt>
          <rp>）</rp>
        </ruby>
        の髪の毛を抜くと云う事は、何ぼう悪い事かも知れぬ。じゃが、ここにいる死人どもは、皆、そのくらいな事を、されてもいい人間ばかりだぞよ。現在、わしが今、髪を抜いた女などはな、蛇を
        <ruby>
          四寸<rp>（</rp>
          <rt>しすん</rt>
          <rp>）</rp>
        </ruby>
        ばかりずつに切って干したのを、
        <ruby>
          干魚<rp>（</rp>
          <rt>ほしうお</rt>
          <rp>）</rp>
        </ruby>
        だと云うて、
        <ruby>
          太刀帯<rp>（</rp>
          <rt>たてわき</rt>
          <rp>）</rp>
        </ruby>
        の陣へ売りに
        <ruby>
          往<rp>（</rp>
          <rt>い</rt>
          <rp>）</rp>
        </ruby>
        んだわ。
        <ruby>
          疫病<rp>（</rp>
          <rt>えやみ</rt>
          <rp>）</rp>
        </ruby>
        にかかって死ななんだら、今でも売りに往んでいた事であろ。それもよ、この女の売る干魚は、味がよいと云うて、太刀帯どもが、欠かさず
        <ruby>
          菜料<rp>（</rp>
          <rt>さいりよう</rt>
          <rp>）</rp>
        </ruby>
        に買っていたそうな。わしは、この女のした事が悪いとは思うていぬ。せねば、饑死をするのじゃて、仕方がなくした事であろ。されば、今また、わしのしていた事も悪い事とは思わぬぞよ。これとてもやはりせねば、饑死をするじゃて、仕方がなくする事じゃわいの。じゃて、その仕方がない事を、よく知っていたこの女は、大方わしのする事も大目に見てくれるであろ。」
        <br />
        老婆は、大体こんな意味の事を云った。
        <br />
        下人は、太刀を
        <ruby>
          鞘<rp>（</rp>
          <rt>さや</rt>
          <rp>）</rp>
        </ruby>
        におさめて、その太刀の
        <ruby>
          柄<rp>（</rp>
          <rt>つか</rt>
          <rp>）</rp>
        </ruby>
        を左の手でおさえながら、冷然として、この話を聞いていた。勿論、右の手では、赤く頬に膿を持った大きな
        <ruby>
          面皰<rp>（</rp>
          <rt>にきび</rt>
          <rp>）</rp>
        </ruby>
        を気にしながら、聞いているのである。しかし、これを聞いている中に、下人の心には、ある勇気が生まれて来た。それは、さっき門の下で、この男には欠けていた勇気である。そうして、またさっきこの門の上へ上って、この老婆を捕えた時の勇気とは、全然、反対な方向に動こうとする勇気である。下人は、饑死をするか盗人になるかに、迷わなかったばかりではない。その時のこの男の心もちから云えば、饑死などと云う事は、ほとんど、考える事さえ出来ないほど、意識の外に追い出されていた。
        <br />
        「きっと、そうか。」
        <br />
        老婆の話が
        <ruby>
          完<rp>（</rp>
          <rt>おわ</rt>
          <rp>）</rp>
        </ruby>
        ると、下人は
        <ruby>
          嘲<rp>（</rp>
          <rt>あざけ</rt>
          <rp>）</rp>
        </ruby>
        るような声で念を押した。そうして、一足前へ出ると、不意に右の手を
        <ruby>
          面皰<rp>（</rp>
          <rt>にきび</rt>
          <rp>）</rp>
        </ruby>
        から離して、老婆の
        <ruby>
          襟上<rp>（</rp>
          <rt>えりがみ</rt>
          <rp>）</rp>
        </ruby>
        をつかみながら、噛みつくようにこう云った。
        <br />
        「では、
        <ruby>
          己<rp>（</rp>
          <rt>おれ</rt>
          <rp>）</rp>
        </ruby>
        が
        <ruby>
          引剥<rp>（</rp>
          <rt>ひはぎ</rt>
          <rp>）</rp>
        </ruby>
        をしようと恨むまいな。己もそうしなければ、饑死をする体なのだ。」
        <br />
        下人は、すばやく、老婆の着物を剥ぎとった。それから、足にしがみつこうとする老婆を、手荒く死骸の上へ蹴倒した。梯子の口までは、僅に五歩を数えるばかりである。下人は、剥ぎとった
        <ruby>
          檜皮色<rp>（</rp>
          <rt>ひわだいろ</rt>
          <rp>）</rp>
        </ruby>
        の着物をわきにかかえて、またたく間に急な梯子を夜の底へかけ下りた。
        <br />
        しばらく、死んだように倒れていた老婆が、死骸の中から、その裸の体を起したのは、それから間もなくの事である。老婆はつぶやくような、うめくような声を立てながら、まだ燃えている火の光をたよりに、梯子の口まで、這って行った。そうして、そこから、短い
        <ruby>
          白髪<rp>（</rp>
          <rt>しらが</rt>
          <rp>）</rp>
        </ruby>
        を
        <ruby>
          倒<rp>（</rp>
          <rt>さかさま</rt>
          <rp>）</rp>
        </ruby>
        にして、門の下を覗きこんだ。外には、ただ、
        <ruby>
          黒洞々<rp>（</rp>
          <rt>こくとうとう</rt>
          <rp>）</rp>
        </ruby>
        たる夜があるばかりである。
        <br />
        下人の
        <ruby>
          行方<rp>（</rp>
          <rt>ゆくえ</rt>
          <rp>）</rp>
        </ruby>
        は、誰も知らない。
        <br />
        （大正四年九月）
      </Text>
    </>
  )
}

export default Post
