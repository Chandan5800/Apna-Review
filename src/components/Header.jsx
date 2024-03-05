import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { NavLink as ReactLink, useNavigate } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../Auth'
import { NavLink } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom';


const navigation = {
  categories: [
    {
      id: 'home',
      name: 'Home', 
      href: '/'
    },
    {
      id: 'product',
      name: 'Product',
      subcategories: [
        { name: 'Category 1', href: '/category1' },
        { name: 'Category 2', href: '/category2' },
        // Add more subcategories as needed
      ]
      
    },
    {
      id: 'services',
      name: 'Services',
    },
  ],

  pages:
    [
      { name: "About", href: "/about" },
      { name: "ContactUs", href: "/contact" }

    ]


}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handCloseUserMenu = () => {
    setAnchorEl(null);
  }

  let navigate = useNavigate()

  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)


  useEffect(() => {
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())
  }, [login])

  const logout = () => {
    doLogout(() => {
      setLogin(false)
      navigate("/")
    })
  }

  const location = useLocation();

  return (
    <div className="bg-white z-[2000px]">


      <header className="fixed-top bg-white ">

        <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">

              {/* Logo */}
              {/* <div className="ml-4 font-semibold text-2xl flex lg:ml-0 cursor-pointer">
                ApnaReview 
              </div> */}

              <Link to="/" className="navbar-brand fw-bolder fst-italic fs-4">
                APNA<span className='text-danger'>REVIEW</span>
              </Link>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
  <div className="flex h-full space-x-8">
    {navigation.categories.map((category) => (
      <Popover key={category.name} className="flex">
        {({ open }) => (
          <>
            <div className="relative flex">
              <Popover.Button
                className={classNames(
                  open
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-700 hover:text-gray-950',
                  'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                )}
              >
                {category.name}
              </Popover.Button>
              {category.subcategories && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 top-full left-0 mt-1 w-full">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {category.subcategories.map((subcategory) => (
                          <ReactLink
                            key={subcategory.name}
                            to={subcategory.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{subcategory.name}</p>
                            </div>
                          </ReactLink>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              )}
            </div>
          </>
        )}
      </Popover>
    ))}
    {navigation.pages.map((page) => (
      <div key={page.name} className="flex">
        <ReactLink
          to={page.href}
          className="-m-2 block p-2 font-medium text-gray-700 hover:text-gray-950 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out mt-1 text-decoration-none"
        >
          {page.name}
        </ReactLink>
      </div>
    ))}
  </div>
</Popover.Group>




              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:mr-6">
                  <a href="/search" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user?.firstName ? (
                    <div>
                      <Avatar
                        className='text-white'
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-hashpopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {user?.firstName[0].toUpperCase()}
                      </Avatar>
                      <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button"
                        }}
                      >

                        {
                          login && (
                            <>
                              <MenuItem>
                                <NavLink tag={ReactLink} to="/profile">
                                  Profile
                                </NavLink>
                              </MenuItem>
                              <MenuItem>
                                <NavLink onClick={logout}>
                                  Logout
                                </NavLink>
                              </MenuItem>
                            </>

                          )
                        }

                      </Menu>
                    </div>
                  ) : (
                    <Button onClick={() => navigate("/login")} className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
