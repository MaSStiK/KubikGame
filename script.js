let arrayKubiks = [];
let countKubiks =  4 //arrayKubiks.length;
console.log(arrayKubiks.length);

for (let i = 0; i < countKubiks / 2; i++) {
    let kubik = {
        red: Math.round(Math.random() * 255),
        green: Math.round(Math.random() * 255),
        blue: Math.round(Math.random() * 255),
        view: false
    };

    arrayKubiks.push(kubik);
}

arrayKubiks = [...arrayKubiks, ...arrayKubiks];

console.log(arrayKubiks);

function renderKubiks(arrayKubiks) {
    arrayKubiks.map((kubik, index) => {
        if (!document.getElementById('kubik_' + index)) {
            let div = document.createElement('div');
            div.id = 'kubik_' + index;
            div.className = 'kubik';
            div.onclick = event => {kubikClick(event)};
            document.getElementById('kubiks').append(div);
        }

        else {
            renderKubik(kubik, index)
        }
    });
}

function renderKubik(kubik, index) {
    if (kubik.view) {
        document.getElementById('kubik_' + index).style.backgroundColor = 'rgb(' + kubik.red + ',' + kubik.green + ',' + kubik.blue + ')';
    }
    
}

renderKubiks(arrayKubiks);

function kubikClick(event) {
    let kubikId = Number(event.target.id.slice(6));

    arrayKubiks.map((kubik, index) => {
        if (index === kubikId) {
            kubik.view = true;
        }
    });

    renderKubiks(arrayKubiks);
}