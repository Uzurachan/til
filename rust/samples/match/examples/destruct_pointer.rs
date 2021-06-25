fn main() {
    // `i32`型へのリファレンスをアサインする。
    // `&`によってリファレンスであることを明示している。
    let reference = &4;

    match reference {
        // 上で定義した`reference`という変数が`&val`とのパターンマッチ
        // に用いられた場合、以下の2つの値が比較されていることになる。
        // `&i32`
        // `&val`
        // ^ We see that if the matching `&`s are dropped, then the `i32`
        // should be assigned to `val`.
        // ^ よって`&`を落とせば、`i32`が`val`にアサインされることがわかる。
        &val => println!("Got a value via destructing: {:?}", val),
    }

    // `&`を使用したくない場合は、マッチングの前にデリファレンスする。
    match *reference {
        val => println!("Got a value via destructing: {:?}", val),
    }

    let _not_a_reference_value = 3;

    let ref is_a_reference_value = 10;

    println!("ref of `is_a_reference_value`: {:?}", is_a_reference_value);

    let value = 5;
    let mut mut_value = 6;

    match value {
        ref r => println!("Got a reference to a value {:?}", r),
    }

    match mut_value {
        ref mut m => {
            *m += 10;
            println!("We added 10. `mut_value`: {:?}", m);
        },
    }
}
