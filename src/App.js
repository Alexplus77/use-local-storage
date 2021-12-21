import "App.css";

/**
 * Напиши кастомный хук useLocalStorage для работы с локальным хранилищем
 * принцип работы - у нас есть поле для ввода - все, что вводит туда
 * пользователь должно сохранятся после перезагрузки страницы.
 * Если пользователь очистил
 * поле ввода, после перезагрузки, инпут должен быть пустым
 * то есть должно запоминать, что вводит пользователь.
 * хук принимает два заначения 1. key - ключ по которому хранится значение
 * в localStorage 2 значение по умолчанию, которое вводится в инпуте
 * если у нас в localStorage ничего не сохранено.
 */
import useLocalStorage from "hooks/useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage("input", "Значение по умолчанию");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e)}
        placeholder={!name.trim() ? "Введите значение" : null}
        type="text"
      />
    </div>
  );
}
