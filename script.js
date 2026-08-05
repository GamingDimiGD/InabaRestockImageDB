let imageDiv = document.querySelector('.images');

fetch('data.json')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('image-item');
        imageDiv.append(div);
        let image = document.createElement('img');
        image.src = `images/${item.name}`;
        let caption = document.createElement('p');
        caption.innerHTML = `<b>${item.name}</b><br>Submitted User ID: ${item.submitted_by}<br>Artist: ${item.artist || 'none'}<br>Edited By: ${item.edited_by || 'none'}`;
        div.append(caption);
        div.append(image);
    });
});