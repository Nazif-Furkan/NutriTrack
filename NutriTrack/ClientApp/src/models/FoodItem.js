class FoodItem {
    constructor(name, photo) {
        this.name = name;
        this.photo = photo;
        this.timestamp = Date.now(); // yemeğin kaydedildiği zamanı temsil eden bir tarih-saat değeri
    }
}

export default FoodItem;
