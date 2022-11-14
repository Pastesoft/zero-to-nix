import { Tab } from "@headlessui/react";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import type { WritableAtom } from "nanostores";
import { Fragment } from "react";

type Props = {
  title: string;
  options: string[];
  atom: WritableAtom<string>;
};

const Selector = ({ title, options, atom }: Props) => {
  const $item: string = useStore(atom);

  return (
    <div className="not-prose inline-flex items-center space-x-6 border-2 rounded-xl py-4 px-6 shadow-sm dark:bg-black dark:border-slate-400">
      <p className="text-xl font-semibold">{title}</p>
      <Tab.Group onChange={(idx: number) => atom.set(options[idx]!)}>
        <Tab.List as="div" className="space-x-3">
          {options.map((o) => (
            <Tab as={Fragment}>
              <button
                key={o}
                onClick={() => atom.set(o)}
                className={clsx(
                  "px-3 rounded-lg shadow font-semibold",
                  $item === o
                    ? "bg-violet-300 text-black"
                    : "bg-slate-100 text-black hover:bg-purple-200"
                )}
              >
                {o}
              </button>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default Selector;