const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['212637915359'] //['628','628'] 2 owner atau lebih
global.packname = 'الستيكر ذا بتاع جواد اللي يسرقوا gay'
global.author = 'Jawad'
global.botname = 'IsHaQ-MD'
global.listprefix = ['+','!','.']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '212637915359' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://i.ibb.co/FkTV96MG/naze.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/Nazedev',
	gh: 'https://github.com/jawadhusa',
	gc: 'https://chat.whatsapp.com/IoWgA7cQT2rHihDP0xQwNr',
	ch: '0029VbAD3GrIHphJRlJzqG2j@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key:   🔑 انتهت صلاحية مفتاح API الخاص بك، يرجى زيارة\nhttps://my.hitori.pw ,
	owner:   👑 هذه الميزة خاصة بالمالك فقط! ,
	admin:   🛡️ هذه الميزة خاصة بالمشرفين فقط! ,
	botAdmin:   🤖 يجب أن يكون البوت مشرفاً لاستخدام هذا الأمر! ,
	group:   👥 هذا الأمر للاستخدام في المجموعات فقط! ,
	private:   💬 هذا الأمر للاستخدام في الدردشة الخاصة فقط! ,
	limit:   ❌ لقد استهلكت حدك اليومي! ,
	prem:   💎 هذه الميزة خاصة بالمستخدمين المميزين فقط! ,
	wait:   ⏳ جاري التحميل... ,
	error:   ❗ حدث خطأ! ,
	done:   ✅ تم 
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}

// Lainnya

global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte']
global.chatLength = 1000

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
