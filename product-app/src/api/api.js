export default function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("fetch failed")
                } else {
                    return res.json()
                }
            })
            .then((data) => resolve(data))
            .catch((error) => {
                reject(error);
            });
    })
}
