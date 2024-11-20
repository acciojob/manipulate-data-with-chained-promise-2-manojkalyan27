//your JS code here. If required.
let arr = [1, 2, 3, 4];

let output = document.querySelector('#output');

function ChainedPromises(){

	return new Promise (() => {
        setTimeout(()=>{
            arr.forEach((item)=>{
                if(item%2 === 0){
                    output.innerHTML += `${item} `;
                }
            })
        },1000);
        return new Promise(() =>{
            setTimeout(()=>{
                arr.forEach((item)=>{
                    if(item%2 === 0){
                        output.innerHTML += `${item*2} `;
                    }
                })
            },2000);
        })
    })
}

ChainedPromises();