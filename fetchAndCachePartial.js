function (url) {
            var result;
            return function getTemplate() {
                if (result) {
                    var promise = new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (result.error) {
                                return reject(result);
                            }
                            return resolve(result);
                        }, 0);
                    });
                    return promise;
                }
                return fetch(url)
                    .then(function (data) {
                        if (data && data.text) {
                            return data.text();
                        }
                    })
                    .then(function (html) {
                        result = {
                            template: html
                        };
                        return result;
                    })
                    .catch(function (err) {
                        result = {
                            template: '',
                            error: err
                        }
                    });
            }
        }