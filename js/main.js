'use strict';

{
    const btn = document.querySelector('#btn');
    const message = ['それガーチャー？','ぎりはっぴー','エグチ','シャバい']
    const btnText = document.querySelector('.btn_text');
    btnText.style.color = '#FFF';
    
    btn.addEventListener('click',()=>{
        const messageRandom = Math.floor(Math.random()*message.length);
        const appearingMessage = document.querySelector('.random_message');
        // ランダムに文字を変える
        appearingMessage.textContent = message[messageRandom];  
        appearingMessage.style.color = '#FFF';
        btn.disabled = true;
    
        // h1の項目を 2秒後に 「changed!」に変える
        setTimeout(function() {
            
            location.reload();
        }, 1000);
    });
    
//   背景色をランダムで変える
const bgColor = document.querySelector('.btn_bgColor');

bgColor.addEventListener('click',()=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// 背景色にコメントを付ける     途中「ランダムで色が変わるよ！」と吹き出しをつけたい
// クリックすると
bgColor.addEventListener('click',()=> {
    // クリックした場所からXYと＋10pxの場所に
    bgColor
    // 「ランダムで色が変わるよ！」とコメントをだす
    // 3秒後に消える
});


// 昭和、平成、令和のセクションを切り替えたい
const syouwaBtn = document.getElementById('syouwa__Btn');
const heiseiBtn = document.getElementById('heisei__Btn');
const reiwaBtn = document.getElementById('reiwa__Btn');

const syouwaSection = document.getElementById('syouwa__sec');
const heiseiSection = document.getElementById('heisei__sec');
const reiwaSection = document.getElementById('reiwa__sec');



syouwaBtn.addEventListener('click',()=>{
    syouwaSection.style.display = 'block';
    heiseiSection.style.display = 'none';
    reiwaSection.style.display = 'none';
});

heiseiBtn.addEventListener('click',()=>{
    syouwaSection.style.display = 'none';
    heiseiSection.style.display = 'block';
    reiwaSection.style.display = 'none';
});

reiwaBtn.addEventListener('click',()=>{
    syouwaSection.style.display = 'none';
    heiseiSection.style.display = 'none';
    reiwaSection.style.display = 'block';
});
// 昭和、平成、令和のセクションを切り替えたい   fin

}