/* global $*/
$(function(){
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
        }
    }
    // 物語開始
    // ユーザー一覧を作成
    const users = Array();
    // ユーザー一覧に岩井さん追加
    users.push(new User('岩井', 25, 'male'));
    users.push(new User('島', 18, 'female'));
    users.push(new User('青木', 100, 'male'));

    $('#h1').text('jQueryの練習').addClass('red');

    $('h2').eq(0).css('color', 'green');

    // ユーザー一覧をプレビュー画面に表示
    const disp_users = (all) => {
            $.each(all, (index, user) => {
            const ul = $('<ul>');
            const li_name = $('<li>', {text: user.name});
            li_name.css('color', 'blue');
            const li_age = $('<li>', {text: user.age + '歳'});
            const li_gender = $('<li>', {text: user.gender === 'male' ? '男性' : '女性'});
            ul.append(li_name);
            ul.append(li_age);
            ul.append(li_gender);
            $('#all').append(ul);
        });
    };
    
    // disp_users関数を実行
    disp_users(users);

    
    // 登録ボタンを押した時のイベント処理
    $('button').click(() => {
        // 一旦表示をクリア
        $('#all').empty();
        // 入力された名前を取得
        const name = $('input[name="name"]').val();
        const age = $('input[name="age"]').val();
        const gender = $('input[name="gender"]:checked').val();
        // 新しいユーザー作成
        const user = new User(name, age, gender);
        // ユーザー一覧に追加
        users.push(user);
        // console.log(users);
        disp_users(users);
    });
});

