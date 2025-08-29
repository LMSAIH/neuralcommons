use glob::glob;
use std::path::Path;
use walkdir::WalkDir;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn say_something() -> String {
    println!("Writing at execution of callable");
    return format!("I am saying something from Rust!");
}

#[tauri::command]
fn find_image_paths() -> Vec<String> {
    vec![
        String::from("/path/to/image1.png"),
        String::from("/path/to/image2.jpg"),
        String::from("/path/to/image3.bmp"),
    ]
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, say_something])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
