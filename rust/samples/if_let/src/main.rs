fn main() {
    /*
    let optional = Some(7);
    match optional {
        Some(i) => {
            println!("{:?}", i),
        },
        _ => {},
    }
    */

    let number = Some(7);
    let letter: Option<i32> = None;
    let emotion: Option<i32> = None;

    if let Some(i) = number {
        println!("Matched {:?}!", i);
    }

    if let Some(i) = letter {
        println!("Matched {:?}!", i);
    } else {
        println!("Didn't match a number. Let's go with a letter!");
    }
}
