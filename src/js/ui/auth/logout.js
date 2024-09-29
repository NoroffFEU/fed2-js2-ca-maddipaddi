import { remove } from "../../api/storage/remove";

export function onLogout() {
    remove("token");
    remove("profile");
    window.location.href="/";
}