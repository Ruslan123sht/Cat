const Discord = require('discord.js');
const client = new Discord.Client()
var prefix = '.'

 client.on('message', message => {
     if(message.author === client.user) return;
     if(message.content.startsWith(prefix + 'Помощь') || message.content.startsWith(prefix + 'помощь')) {
        message.channel.sendMessage({"embed":{"title":"Команды","color":16744448,"fields":[{"name":"Весёлости ","value":"```Корм - покормить бота\nГладить - погладить бота\nПривет - Поздороваться с ботом\nПока - Попрощаться с ботом\nВ - Случайный ответ```","inline":false},{"name":"Помощь","value":"```Серв - сервер на котором мы можете пообщаться и задать вопрос\nПомощь - все команды бота на данный момент```","inline":false},{"name":"Админам","value":"```Чистка - очищает сообщения\nСсылка - пригласить бота\nБан - забанить участника\nКик - выгнать участника```","inline":false},{"name":"Инфо","value":"```Создатель - инфо о создателе\nБот - инфо о боте\nОбновление - инфо об обновлении```","inline":false}]}});
      }
      if(message.content.startsWith(prefix + 'Серв') || message.content.startsWith(prefix + 'серв')) {
        message.channel.sendMessage({"embed":{"title":"За помощью!","description":"Сервер бота: https://discordapp.com/invite/U7dkSet","color":16776960}});
      }
     if(message.content.startsWith(prefix + 'Ссылка') || message.content.startsWith(prefix + 'ссылка') || message.content.startsWith(prefix + 'Ссылочка') || message.content.startsWith(prefix + 'ссылочка')) {
        message.channel.sendMessage({"embed":{"title":"Приглашение","description":"Пригласить бота: https://discordapp.com/oauth2/authorize?client_id=544380304895377408&scope=bot&permissions=2146958847","color":65280}});
      }
     if(message.content.startsWith(prefix + 'Бот') || message.content.startsWith(prefix + 'бот')) {
        message.channel.sendMessage({"embed":{"title":"О боте","description":"Что за бот: Котик#1262\nЯзык программирования: JavaScript\nСреда разработки: Visual Studio Code\nУсилия: Максимальные, для вас :heart:\nПрефикс: .\nВерсия: 0.0.5 Alfa\nСпасибо что выбрали, Котик#1262!","color":255}});
      }
     if(message.content.startsWith(prefix + 'Привет') || message.content.startsWith(prefix + 'привет') || message.content.startsWith(prefix + "хай") || message.content.startsWith(prefix + 'Хай')) {
        message.reply("Привет тебе! :wave:")
      }    
     if(message.content.startsWith(prefix + 'Пока') || message.content.startsWith(prefix + 'пока') || message.content.startsWith(prefix + 'бб')) {
        message.reply("Пока тебе! :wave:")
      }     
     if(message.content.startsWith(prefix + 'Гладить') || message.content.startsWith(prefix + 'гладить')) {
        message.channel.sendMessage({"embed":{"title":"Люби меня","description":"Я тебя люблю сильно, это так приято!","color":16592386}});
      }
     if(message.content.startsWith(prefix + 'Создатель') || message.content.startsWith(prefix + 'создатель')) {
        message.channel.sendMessage({"embed":{"title":"Создатель","description":"Создатель меня: 🔥ПушинFire🔥#8960.\nОн создал меня! Если хотите ему задать вопрос, то сервер его: https://discordapp.com/invite/U7dkSet","color":12899627}})
      }
     if(message.content.startsWith(prefix + 'Обновление') || message.content.startsWith(prefix + 'обновление')) {
        message.channel.sendMessage({"embed":{"title":"Инфо об обновлении","description":"Обновление 0.0.5 Alfa\nА зачем вам знать что нового?","color":160}})
      }
     if(message.content.startsWith(prefix + 'Аватар') || message.content.startsWith(prefix + 'Ава') || message.content.startsWith(prefix + 'аватар') || message.content.startsWith(prefix + 'ава')) {
         message.reply(message.author.avatarURL);
      }
      if(message.content.startsWith(prefix + "Корм") || message.content.startsWith(prefix + 'корм')) {
        message.channel.sendMessage({"embed":{"title":"Муррр","description":"Спасибо что ты меня покормил!","color":8405056}});
      }
     if(message.content.startsWith(prefix + 'Гладить') || message.content.startsWith(prefix + 'гладить')) {
        message.channel.sendMessage({"embed":{"title":"Люби меня","description":"Я тебя люблю сильно, это так приято!","color":16592386}});
      }
     if(message.content.startsWith(prefix + 'В') || message.content.startsWith(prefix + 'в')) {
         answer = ["Да!", "Нет!", "Возможно"];
         message.channel.send(answer[Math.floor(Math.random() * answer.length)]);
      }
   })

  client.on('guildMemberAdd', member => {
 
   const channel = member.guild.channels.find(ch => ch.name === '👋привет-пока👋');
   if (!channel) return;
   channel.send(`Добро пожаловать, ${member}!`);
 })
  
 client.on('message', async message => { 
    if (message.mentions.users.size > 0) {
    }
            if (message.content.startsWith(prefix + 'чистка') || message.content.startsWith(prefix + 'Чистка')) {
                let msgArray = message.content.split(' ')
                let count = msgArray.slice(1)
                await message.delete()
                await message.channel.bulkDelete(count[0] || 10)
            
}})

client.on('message', message => {

   if (!message.guild) return;
   if (message.content.startsWith(prefix + 'Кик') || message.content.startsWith(prefix + 'кик')) {
     const user = message.mentions.users.first();
     if (user) {
       const member = message.guild.member(user);
       if (member) {
         member.kick('А ты не офигел, нарушать правила?').then(() => {
           message.reply(`Успешно выгнат ${user.tag}`);
         }).catch(err => {
           message.reply('Мне не удалось выгнать. Попробуйте дать мне больше прав чем у него.');
           console.error(err);
         });
       } else {
         message.reply('Пользователя нет в серваке!');
       }
     } else {
       message.reply('Вы не упомянули пользователя, чтобы мне выгнать!');
     }
   }
 })

 client.on('message', message => {

   if(!message.guild) return;
   if(message.content.startsWith(prefix + 'Бан') || message.content.startsWith(prefix + 'бан')) {
     const user = message.mentions.users.first();
     if (user) {
       const member = message.guild.member(user);
       if (member) {
         member.ban({
           reason: 'Бан по причине баклажан',
         }).then(() => {
           message.reply(`Успешно забанен ${user.tag}`);
         }).catch(err => {
           message.reply('У меня недостаточно прав для бана этого пользователя. Попробуйте дать мне больше прав чем у него.');
           console.error(err);
         });
       } else {
         message.reply('Пользователя нет в серваке!');
       }
     } else {
       message.reply('Вы не упомянули пользователя, чтобы мне забанить!');
     }
   }
})

client.login('NTQ0MzgwMzA0ODk1Mzc3NDA4.D15PSw.QraoGvKChuwM_j5HuRLbQ7E01M8');
client.on('ready', async () => {
    await console.log(`${client.user.username} присоеденился к дискорду и готов работать!`)
})
function serverEnd(size){
   if (size < 20 && size > 9) return size + ' серверов | Спасибо вам, что выбрали Котик#1262'
   else if (size%10 < 2) return size + " сервер | Спасибо вам, что выбрали Котик#1262"
   else if (size%10 < 5) return size + ' сервера | Спасибо вам, что выбрали Котик#1262'
   else return size + ' серверов | Спасибо вам, что выбрали Котик#1262'
}

client.on('message', (receivedMessage) => {
 client.user.setActivity(serverEnd(client.guilds.size), { type : "WATCHING" })
})
