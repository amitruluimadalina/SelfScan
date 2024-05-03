import { Dialog } from "@headlessui/react";
import { navigationItems } from "../constants/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";

type DrawerMenuProps = {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

export default function Drawer({
  mobileMenuOpen,
  onToggleMobileMenu,
}: DrawerMenuProps) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={onToggleMobileMenu}
    >
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-full sm:max-w-xs overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex justify-end">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onToggleMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
