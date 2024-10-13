module.exports.sendMsg = (req, res) => {
    console.log('Received data:', req.body);
    const config = require('../config/config.json');

    let http = require('request');
    let reqBody = req.body;

    let fields = [
        '<b>Имя</b>: ' + reqBody.name,
        '<b>Email</b>: ' + reqBody.email,
        '<b>Номер телефона</b>: ' + reqBody.phone,
        '<b>Текст</b>: ' + reqBody.description
    ];
    let msg = '';

    // Склеиваем все данные в одну строку
    fields.forEach((field) => {
        msg += field + '\n';
    });

    // Кодируем результат
    msg = encodeURI(msg);

    // Делаем запрос к Telegram API
    http.post(
        `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`,
        function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);

            if (response.statusCode === 200) {
                res.status(200).json({
                    response: {
                        msg: 'Заявка успешно отправлена! Ожидайте звонка.'
                    }
                });
            } else {
                res.status(400).json({
                    status: 'error',
                    message: 'Произошла ошибка!'
                });
            }
        }
    );
};
