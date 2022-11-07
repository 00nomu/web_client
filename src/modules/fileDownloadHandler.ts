export const downloadImageHandler = (
    id: any,
    filename?: any
) => {
    fetch(id, {
        method: "GET",
        headers: {}
    })
        .then(response => {
            response.arrayBuffer().then(function (buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", filename ? filename : "image.png"); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
}

export const downloadPdfHandler = (id: any, filename: any) => {
    fetch(id, {
        method: "GET",
        headers: {}
    })
        .then(response => {
            response.arrayBuffer().then(function (buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", filename ? filename : "file.pdf"); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
}