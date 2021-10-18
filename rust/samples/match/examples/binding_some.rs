fn some_number() -> Option<u32> {
    Some(42)
    //None
}

fn main() {
    match some_number() {
        Some(n @ 42) => println!("The Answer: {}!", n),
        Some(n) => println!("Not interesting... {}", n),
        _ => (),
    }
}
