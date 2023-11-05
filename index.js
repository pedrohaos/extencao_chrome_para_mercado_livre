"use strict"

function init(){
    const price = document.querySelector('div.ui-pdp-price__second-line > span.andes-money-amount.ui-pdp-price__part.andes-money-amount--cents-superscript.andes-money-amount--compact > span.andes-money-amount__fraction')?.innerText.replace('.','') || '0';
    const cents = document.querySelector('div.ui-pdp-price__second-line > span.andes-money-amount.ui-pdp-price__part.andes-money-amount--cents-superscript.andes-money-amount--compact > span.andes-money-amount__cents')?.innerText || '0';
    const sold = Number(document.querySelector('.ui-pdp-subtitle')?.innerText.split(' ')[4]);

    const container = document.querySelector('.ui-pdp-header__title-container');

    const total = Number(price + '.' + cents) * sold;

    setTimeout(()=>{
        container.insertAdjacentHTML('beforebegin',
        `
            <ul class="mlext-container">
                <li>Receita Bruta: <span>${formatMoney(total)}</span></li>
            </ul>
        `);
    },1500);
}

function formatMoney(value){
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

init();