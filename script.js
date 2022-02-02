 window.onload = function(){
     

            // ユーザーの設計図を作成
            class User {
                // プロパティ（変数）
                name; // 名前
                age; // 年齢
                gender; // 性別
                // コンストラクタ
                constructor(name, age, gender){
                    // プロパティの値のセット
                    this.name = name;
                    this.age = age;
                    this.gender = gender;
                    console.log(this.name + 'さんが生まれた');
                }
                // 挨拶をするメソッドを定義
                greeting(){
                    console.log('私の名前は' + this.name + 'です。年齢は' + this.age + '歳です');
                    // if(this.gender === 'male'){
                    //     console.log('性別は' + '男性です');
                    // }else{
                    //     console.log('性別は' + '女性です');
                    // }
                    // 三項演算子
                    console.log('性別は' + (this.gender === 'male' ? '男性' : '女性') + 'です');
                }
                // お酒の飲むメソッドを定義
                drink(){
                    console.log(this.age >= 20 ? this.name + 'さん、お酒OK' : this.name + 'さん、お酒NG。あと' + (20 - this.age) + '年待ちましょう');
                }
                // otherさんに話しかけるメソッドを定義
                talk(other){
                    console.log(this.name + 'さんが' + other.name + 'さんに話しかけた');
                    console.log('お前さん' + other.age + '歳かよ！');
                }
            }
            // 物語開始
            // 岩井さん(オブジェクト)、誕生
            const iwai = new User('岩井', 25, 'male');
            // 島さん、誕生
            const shima = new User('島', 18, 'female');
            // 岩井さんが挨拶をする
            iwai.greeting();
            // 島さんが挨拶をする
            shima.greeting();
            // 岩井さんがお酒を飲む
            iwai.drink();
            // 島さんがお酒を飲む
            shima.drink();
            // 岩井さんが島さんに話しかける
            iwai.talk(shima);
            // 島さんが岩井さんに話しかける
            shima.talk(iwai);
            
            // ユーザー一覧を作成
            const users = Array();
            // ユーザー一覧に岩井さん追加
            users.push(iwai);
            users.push(shima);
            users.push(new User('青木', 100, 'male'));
            // console.log(users);
            // ユーザー一覧表示
            users.forEach((user) => {
                console.log(user.name);
                console.log(user.age + '歳');
                console.log(user.gender === 'male' ? '男性' : '女性');
            });
            
            // DOM(Document Object Model)
            // window.alert('OK');
            // document.write('OK');
            // console.log('OK');
            const h1 = document.getElementById('h1');
            // console.log(h1);
            h1.textContent = 'DOMの練習';
            h1.style.color = 'red';
            h1.style.backgroundColor = 'pink';
            h1.style.width = '30%';
            h1.style.textAlign = 'center';
            h1.style.borderBottom = 'solid 2px red';
            
            const h2s = document.getElementsByTagName('h2');
            h2s[0].style.color = 'green';
            
            const all = document.getElementById('all');
            // console.log(all);
            // ユーザー一覧をプレビュー画面に表示
            users.forEach((user) => {
                // ulタグを新規作成
                // <ul></ul>
                const ul = document.createElement('ul');
                // liタグを新規作成
                // <li></li>
                const li_name = document.createElement('li');
                // <li>岩井</li>
                li_name.textContent = user.name;
                li_name.style.color = 'blue';
                const li_age = document.createElement('li');
                li_age.textContent = user.age + '歳';
                const li_gender = document.createElement('li');
                li_gender.textContent = user.gender === 'male' ? '男性' : '女性';
                // console.log(li_name);
                // <ul><li>岩井</li></ul>
                ul.appendChild(li_name);
                ul.appendChild(li_age);
                ul.appendChild(li_gender);
                // console.log(ul);
                all.appendChild(ul);
            });
};