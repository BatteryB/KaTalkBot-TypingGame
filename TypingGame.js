const typingText = [
    "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
    "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
    "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
    "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
    "신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
    "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
    "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
    "늘 하던 대로 하면 늘 얻던 것을 얻는다.", "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다.",
    "성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다.",
    "성공한 사람을 볼 때 당신은 대중에게 드러난 영예만 보지, 절대 그 영예를 얻기 위해 했던 개인적 희생은 보지 않는다.",
    "기회는 일어나는 것이 아니라 만들어내는 것이다.", "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
    "위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다. 마음이 좁은 사람들은 사람들을 논한다.",
    "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
    "당신이 자신의 시간을 가치있게 생각하지 않으면 남들도 마찬가지일 것이다. 시간과 재능을 막 나눠주지 말고 팔아라.",
    "남들이 당신에게 던진 벽돌들로 탄탄한 기반을 쌓을 수 있어야 성공한다.",
    "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
    "성공적인 삶의 비밀은 무엇을 하는 게 자신의 운명인지 찾아낸 다음 그걸 하는 것이다.",
    "지옥을 겪고 있다면 계속 겪어 나가라.",
    "자기가 세상을 바꿀 수 있다고 생각할 정도로 미친 사람들이 세상을 바꾼다.",
    "언성을 높이지 말고 논거를 강화하라.",
    "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
    "삶의 의미는 자신의 재능을 발견하는 것이다. 삶의 목적은 그것을 나눠주는 것이다.",
    "광기와 천재성 사이의 거리는 성공으로만 측정된다.",
    "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    "모든 성취의 시작점은 갈망이다.",
    "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    "만족스럽게 잠자리에 들려면 매일 아침 투지를 가지고 일어나야 한다.",
    "이기기 위해서는 한 번 이상 전쟁을 치러야 할 때도 있다.",
    "인간은 자신이 원하는 만큼 위대해질 수 있다. 자신을 믿고 용기, 투지, 헌신, 경쟁력있는 추진력을 가진다면, 그리고 가치있는 것들을 위한 대가로 작은 것들을 희생할 용의가 있다면 가능하다."
];

let isStart = false;
let text = '';
let textLangth = 0;
let player = '';
let cnt = 0;
let startTime;
let endTime;
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (room == 'your room name')  { //채팅방 이름 수정 필수 / Modifying chat room name is required
        if (msg == '!타자') {
            replier.reply(help());
        }

        Start(msg, replier, sender);

        PlayGame(msg, replier, sender);

        quietGame(msg, replier);
    }
}
function Start(msg, replier, sender) {
    if (msg == '!타자시작') {
        if (!isStart) {
            player = sender;
            replier.reply('잠시후 게임을 시작합니다.\n플레이어 : ' + player);
            setTimeout(() => replier.reply('3초 후 게임을 시작합니다.'), 1000);
            setTimeout(() => replier.reply('2초 후 게임을 시작합니다.'), 2000);
            setTimeout(() => replier.reply('1초 후 게임을 시작합니다.'), 3000);
            setTimeout(() => isStart = true, 4000);
            setTimeout(() => startTime = new Date().getTime(), 4000);
            setTimeout(() => pickText(replier), 4000);
        } else {
            replier.reply('이미 게임이 진행중 입니다, 잠시 기다려주세요.\n현재 플레이어 : ' + player);
        }
    }
}

function PlayGame(msg, replier, sender) {
    let playerText = '';

    if (msg.startsWith('!타자 ')) {
        playerText = msg.substr(4);

        if (!isStart) {

        }else if(sender !== player){
            replier.reply('플레이어만 입력할 수 있습니다.');
        }else if(playerText !== text){
            replier.reply('오타가 있습니다, 다시 입력해주세요.');
            replier.reply(text);
        }else{
            textLangth += playerText.length;
            if(cnt < 5){
                cnt++;
                pickText(replier);
            }else{
                endTime = new Date().getTime();
                isStart = false;
                Typing(replier);
            }
        }
    }
}

function quietGame(msg, replier){
    if(msg == '!타자종료'){
        if(!isStart){
            replier.reply('먼저 게임을 시작해주세요.');
        }else{
            endTime = new Date().getTime();
            replier.reply(player + '님의 선택으로 게임이 종료되었습니다.');
            Typing(replier);
        }
    }
}

function Typing(replier) {
    let time = (endTime - startTime) / 1000;
    let playerTyping = Math.round((textLangth * time) / 60);

    replier.reply(player + '님의 결과\n' + playerTyping + '타');
    startTime = 0;
    endTime = 0;
    cnt = 0;
    player = '';
    textLangth = 0;
    text = '';
    isStart = false;
}

function pickText(replier) {
    let randomNum = Math.floor(Math.random() * typingText.length);
    text = typingText[randomNum];
    replier.reply(text);
}

function help() {
    let msg = '타자게임 명령어\n\n';
    const help = [
        '!타자시작',
        '!타자종료',
        '!타자 (제시 문장)'
    ];

    msg += help.join('\n');

    return msg;
}