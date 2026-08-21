import { create } from "zustand";
import { persist, type StorageValue } from "zustand/middleware";

type StampState = {
  stamps: Record<string, string>;
  stamp: (id: string) => void;
};

const KEY = "seal-stamps-v1";

function memory(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear: () => map.clear(),
    getItem: (name) => map.get(name) ?? null,
    key: (i) => [...map.keys()][i] ?? null,
    removeItem: (name) => {
      map.delete(name);
    },
    setItem: (name, value) => {
      map.set(name, value);
    },
  };
}

const store = typeof localStorage === "undefined" ? memory() : localStorage;

export const useStamps = create<StampState>()(
  persist(
    (set, get) => ({
      stamps: {},
      stamp: (id: string) =>
        set({
          stamps: { ...get().stamps, [id]: new Date().toISOString() },
        }),
    }),
    {
      name: KEY,
      skipHydration: true,
      storage: {
        getItem: (name) => {
          const raw = store.getItem(name);
          if (!raw) return null;
          try {
            const parsed = JSON.parse(raw) as unknown;
            if (parsed && typeof parsed === "object" && "state" in parsed) {
              return parsed as StorageValue<StampState>;
            }
            if (parsed && typeof parsed === "object") {
              return {
                state: { stamps: parsed as Record<string, string> },
                version: 0,
              } as StorageValue<StampState>;
            }
          } catch {
            return null;
          }
          return null;
        },
        setItem: (name, value) => store.setItem(name, JSON.stringify(value)),
        removeItem: (name) => store.removeItem(name),
      },
    },
  ),
);
