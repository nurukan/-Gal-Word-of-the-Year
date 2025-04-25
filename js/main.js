'use strict';

{
    const btn = document.querySelector('#btn');
    const message = ['絶好調！！！！','やるじゃん','それガーチャー？','ぎりはっぴー','エグチ','シャバい']
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
    



}