fn main() {
    let mut counter = 0u32;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2
        }
    };
    assert_eq!(result, 20);
}
