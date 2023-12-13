type Address = { address: string; city: string };
type PresentDeliveryList<T> = { [key in keyof T]: Address };
