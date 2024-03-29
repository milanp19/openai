function onSubmit(e){
    e.preventDefault();
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if(prompt === ''){
        alert('please add some text');
        return;
    }

    generateImage(prompt, size);
}

async function generateImage(prompt, size){
    try {
      showSpinner();
      const response = await fetch("/openai/generateimage", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      });

      console.log(response);

      if (!response.ok) {
        removeSpinner();
        throw new Error("That image could not be generated");
      }

      const data = await response.json();
      // console.log(data);
      const imageUrl = data.data;
      document.querySelector(".image").style.display = "block";
      document.querySelector("#image").src = imageUrl;
      removeSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}
document.querySelector('#image-form').addEventListener('submit', onSubmit);
