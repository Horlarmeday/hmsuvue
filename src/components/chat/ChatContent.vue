<template>
  <!-- begin:: Content -->
  <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
    <!--Begin::App-->
    <div
      class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app"
    >
      <!--Begin:: App Aside Mobile Toggle-->
      <button class="kt-app__aside-close" id="kt_chat_aside_close">
        <i class="la la-close"></i>
      </button>

      <!--End:: App Aside Mobile Toggle-->

      <!--Begin:: App Aside-->
      <div
        class="kt-grid__item kt-app__toggle kt-app__aside kt-app__aside--lg kt-app__aside--fit"
        id="kt_chat_aside"
      >
        <!--begin::Portlet-->
        <div class="kt-portlet kt-portlet--last">
          <div class="kt-portlet__body">
            <div class="kt-searchbar">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      class="kt-svg-icon"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          id="Path-2"
                          fill="#000000"
                          fill-rule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          id="Path"
                          fill="#000000"
                          fill-rule="nonzero"
                        />
                      </g></svg
                  ></span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-describedby="basic-addon1"
                />
                <div class="kt-chat__left">
                  <!--begin:: Aside Mobile Toggle -->
                  <button
                    type="button"
                    class="btn btn-clean btn-sm btn-icon btn-icon-md kt-hidden-desktop"
                    id="kt_chat_aside_mobile_toggle"
                  >
                    <i class="flaticon2-open-text-book"></i>
                  </button>

                  <!--end:: Aside Mobile Toggle-->
                  <div class="dropdown dropdown-inline">
                    <button
                      type="button"
                      class="btn btn-clean btn-sm btn-icon btn-icon-md"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="flaticon-more-1"></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-fit dropdown-menu-left dropdown-menu-md"
                    >
                      <!--begin::Nav-->
                      <ul class="kt-nav">
                        <li class="kt-nav__item">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#kt_modal_2"
                            class="kt-nav__link"
                          >
                            <i class="kt-nav__link-icon flaticon2-group"></i>
                            <span class="kt-nav__link-text">New Chat</span>
                          </a>
                        </li>
                        <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                            <i
                              class="kt-nav__link-icon flaticon2-open-text-book"
                            ></i>
                            <span class="kt-nav__link-text">Contacts</span>
                          </a>
                        </li>
                        <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                            <i class="kt-nav__link-icon flaticon2-rocket-1"></i>
                            <span class="kt-nav__link-text">Groups</span>
                            <span class="kt-nav__link-badge">
                              <span
                                class="kt-badge kt-badge--brand kt-badge--inline"
                                >new</span
                              >
                            </span>
                          </a>
                        </li>

                        <li class="kt-nav__separator"></li>
                      </ul>

                      <!--end::Nav-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kt-widget kt-widget--users kt-mt-20">
              <div
                id="kt-users"
                class="kt-scroll kt-scroll--pull"
                style="height: 682px;overflow: hidden;"
                data-ktmenu-vertical="1"
                data-ktmenu-scroll="1"
                data-ktmenu-dropdown-timeout="500"
              >
                <div class="kt-widget__items">
                  <div
                    v-for="room in rooms"
                    :key="room._id"
                    class="kt-widget__item current"
                    style="cursor:pointer"
                    :class="[
                      currentRoom && currentRoom.id === room.id ? 'active' : ''
                    ]"
                    @click="connectToRoom(room.id)"
                  >
                    <span
                      v-if="room.avatarURL"
                      class="kt-userpic kt-userpic--circle"
                    >
                      <img :src="room.avatarURL" alt="room Image" />
                    </span>
                    <span v-else class="kt-userpic kt-userpic--circle">
                      <img src="../../assets/images/100_1.jpg" alt="image" />
                    </span>
                    <div class="kt-widget__info">
                      <div class="kt-widget__section">
                        <!-- <a
                          v-if="room.name === currentUser.name"
                          href="#"
                          class="kt-widget__username"
                          >{{ room.users[1].name }}</a
                        > -->
                        <a href="#" class="kt-widget__username">{{
                          room.name
                        }}</a>
                        <span
                          v-if="room.id === currentUser.id"
                          class="kt-badge kt-badge--success kt-badge--dot"
                        ></span>
                        <span
                          v-else
                          class="kt-badge kt-badge--danger kt-badge--dot"
                        ></span>
                      </div>
                      <span class="kt-widget__desc">
                        Nurse
                      </span>
                    </div>
                    <div class="kt-widget__action">
                      <span class="kt-widget__date">36 Mins</span>
                      <span class="kt-badge kt-badge--success kt-font-bold"
                        >7</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--end::Portlet-->
      </div>

      <!--End:: App Aside-->

      <!--Begin:: App Content-->
      <div
        class="kt-grid__item kt-grid__item--fluid kt-app__content"
        id="kt_chat_content"
      >
        <div class="kt-chat">
          <div class="kt-portlet kt-portlet--head-lg kt-portlet--last">
            <div class="kt-portlet__head">
              <div class="kt-chat__head ">
                <div class="kt-chat__left">
                  <!--begin:: Aside Mobile Toggle -->
                  <button
                    type="button"
                    class="btn btn-clean btn-sm btn-icon btn-icon-md kt-hidden-desktop"
                    id="kt_chat_aside_mobile_toggle"
                  >
                    <i class="flaticon2-open-text-book"></i>
                  </button>

                  <!--end:: Aside Mobile Toggle-->
                  <div class="dropdown dropdown-inline">
                    <button
                      type="button"
                      class="btn btn-clean btn-sm btn-icon btn-icon-md"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="flaticon-more-1"></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-fit dropdown-menu-left dropdown-menu-md"
                    ></div>
                  </div>
                </div>
                <div class="kt-chat__center">
                  <div v-if="currentRoom" class="kt-chat__label">
                    <a href="#" class="kt-chat__title">{{
                      currentRoom.name
                    }}</a>
                    <span class="kt-chat__status">
                      <span
                        class="kt-badge kt-badge--dot kt-badge--success"
                      ></span>
                      Active
                    </span>
                  </div>
                  <div v-else class="kt-chat__label">
                    <a href="#" class="kt-chat__title">Chat</a>
                  </div>
                </div>
                <div class="kt-chat__right">
                  <div class="dropdown dropdown-inline">
                    <button
                      type="button"
                      class="btn btn-clean btn-sm btn-icon btn-icon-md"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="flaticon2-add-1"></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-md"
                    >
                      <!--begin::Nav-->
                      <ul class="kt-nav">
                        <li class="kt-nav__head">
                          Messaging
                          <i
                            class="flaticon2-information"
                            data-toggle="kt-tooltip"
                            data-placement="right"
                            title="Click to learn more..."
                          ></i>
                        </li>
                        <li class="kt-nav__separator"></li>
                        <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                            <i class="kt-nav__link-icon flaticon2-group"></i>
                            <span class="kt-nav__link-text">New Group</span>
                          </a>
                        </li>

                        <li class="kt-nav__item">
                          <a href="#" class="kt-nav__link">
                            <i
                              class="kt-nav__link-icon flaticon2-dashboard"
                            ></i>
                            <span class="kt-nav__link-text">Settings</span>
                          </a>
                        </li>

                        <li class="kt-nav__separator"></li>
                        <li class="kt-nav__foot">
                          <a
                            class="btn btn-label-brand btn-bold btn-sm"
                            href="#"
                            >Upgrade plan</a
                          >
                          <a
                            class="btn btn-clean btn-bold btn-sm"
                            href="#"
                            data-toggle="kt-tooltip"
                            data-placement="right"
                            title="Click to learn more..."
                            >Learn more</a
                          >
                        </li>
                      </ul>

                      <!--end::Nav-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kt-portlet__body">
              <div
                id="kt-chat_page"
                style="height: 504px;overflow: hidden !important"
                class="kt-scroll kt-scroll--pull"
              >
                <div class="kt-chat__messages">
                  <div
                    v-for="message in messages"
                    :key="message.id"
                    class="kt-chat__message"
                    :class="[
                      message.senderId === currentUser.id
                        ? 'kt-chat__message--right'
                        : ''
                    ]"
                  >
                    <div class="kt-chat__user">
                      <a
                        v-if="message.senderId === currentUser.id"
                        href="#"
                        class="kt-chat__username"
                      >
                        You</a
                      >
                      <a v-else href="#" class="kt-chat__username"
                        >{{ message.sender.name }}
                      </a>
                      <span class="kt-chat__datetime">{{
                        message.createdAt | moment('from', 'now')
                      }}</span>
                    </div>
                    <div
                      class="kt-chat__text"
                      :class="
                        message.senderId === currentUser.id
                          ? 'kt-bg-light-success'
                          : 'kt-bg-light-brand'
                      "
                    >
                      {{ message.parts[0].payload.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kt-portlet__foot">
              <div class="kt-chat__input">
                <div class="kt-chat__editor">
                  <textarea
                    @keyup="onKeyUp"
                    v-model="newMessage"
                    style="height: 50px"
                    placeholder="Type here..."
                  ></textarea>
                </div>
                <div class="kt-chat__toolbar">
                  <div class="kt_chat__tools">
                    <a href="#"><i class="flaticon2-link"></i></a>
                    <a href="#"><i class="flaticon2-photograph"></i></a>
                    <a href="#"><i class="flaticon2-photo-camera"></i></a>
                  </div>
                  <div class="kt_chat__actions">
                    <button
                      @click="sendMessage"
                      type="button"
                      class="btn btn-brand btn-md btn-upper btn-bold kt-chat__reply"
                    >
                      reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--End:: App Content-->
      <!--begin::Modal-->
      <div
        class="modal fade"
        id="kt_modal_2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Staffs</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="kt-widget kt-widget--users kt-mt-20">
                <div
                  id="kt-users"
                  class="kt-scroll kt-scroll--pull"
                  style="height: 682px;overflow: hidden;"
                  data-ktmenu-vertical="1"
                  data-ktmenu-scroll="1"
                  data-ktmenu-dropdown-timeout="500"
                >
                  <div class="kt-widget__items">
                    <div
                      v-for="staff in staffs"
                      :key="staff.id"
                      class="kt-widget__item"
                      style="cursor:pointer"
                      @click="createRoom(staff)"
                    >
                      <span
                        v-if="staff.avatarURL"
                        class="kt-userpic kt-userpic--circle"
                      >
                        <img :src="staff.avatarURL" alt="staff Image" />
                      </span>
                      <span v-else class="kt-userpic kt-userpic--circle">
                        <img src="../../assets/images/100_1.jpg" alt="image" />
                      </span>
                      <div class="kt-widget__info">
                        <div class="kt-widget__section">
                          <a href="#" class="kt-widget__username">{{
                            staff.name
                          }}</a>
                        </div>
                      </div>
                      <div class="kt-widget__action">
                        <span class="kt-widget__date">36 Mins</span>
                        <span class="kt-badge kt-badge--success kt-font-bold"
                          >7</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end::Modal-->
    </div>

    <!--End::App-->
  </div>

  <!-- end:: Content -->
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
import { mapState } from 'vuex'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import axios from '../../axios'
export default {
  name: 'chat',
  data() {
    return {
      user: '',
      message: '',
      count: 0,
      currentUser: '',
      staffs: [],
      messages: [],
      rooms: [],

      currentRoom: null,
      newMessage: '',

      activeContact: '',
      staffsUrl: '/staff/staffs',
      imageurl: 'http://localhost:3000/static/uploads/',
      chatkitusersurl: '/staff/chatkit'
    }
  },
  mounted() {
    this.scrollbar()
    this.scroll()
    this.getCurrentUser()
    this.getStaffs()
    this.onAddedToRoom()
  },
  methods: {
    handleError(error) {
      this.$iziToast.error({
        title: 'Error!',
        message: error.response.data
      })
    },
    scrollbar() {
      // let scroll = document.querySelector('#kt_aside_menu');
      // scroll.perfectScrollbar();
      const pt = new PerfectScrollbar('#kt-chat_page', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 10
      })
      pt.update()
    },
    scroll() {
      const scroll = new PerfectScrollbar('#kt-users', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 10
      })
      scroll.update()
    },

    getCurrentUser() {
      this.currentUser = this.isLoggedInUser
    },
    sendMessage() {
      const { newMessage, currentUser, currentRoom } = this

      if (newMessage.trim() === '') return

      currentUser.sendMessage({
        text: newMessage,
        roomId: `${currentRoom.id}`
      })

      this.newMessage = ''
    },

    onKeyUp(event) {
      if (event.keyCode === 13) {
        this.sendMessage()
      }
    },

    addSupportStaffToRoom(staff) {
      const { currentRoom, currentUser } = this

      return currentUser
        .addUserToRoom({
          userId: staff,
          roomId: currentRoom.id
        })
        .then(currentRoom => {
          this.rooms = [...this.rooms, currentRoom]
        })
    },
    // getCurrentUserRooms() {
    //   const { currentUser } = this
    //   return currentUser.rooms()
    // },
    connectToRoom(id, messageLimit = 100) {
      this.messages = []
      const { currentUser } = this

      return currentUser
        .subscribeToRoomMultipart({
          roomId: `${id}`,
          messageLimit,
          hooks: {
            onMessage: message => {
              this.messages = [...this.messages, message]
            }
          }
        })
        .then(currentRoom => {
          this.currentRoom = currentRoom
        })
    },
    createRoom(staff) {
      const { currentUser } = this

      return currentUser
        .createRoom({
          name: currentUser.name,
          private: true
        })
        .then(room => {
          this.connectToRoom(room.id, 0)
          this.rooms = [...this.rooms, room]
        })
        .then(() => this.addSupportStaffToRoom(staff.id))
        .catch(error =>
          this.$iziToast.error({
            title: 'Error!',
            message: error
          })
        )
    },

    getStaffs() {
      axios
        .get(this.chatkitusersurl)
        .then(response => {
          this.staffs = response.data.data
        })
        .catch(error => {
          this.handleError(error)
        })
    },
    onAddedToRoom() {
      let token = localStorage.getItem('user-token')
      const parseJwt = token => {
        try {
          return JSON.parse(atob(token.split('.')[1]))
        } catch (error) {
          this.$iziToast.error({
            title: 'Error!',
            message: error
          })
        }
      }
      const loggedInUser = parseJwt(token)
      this.user = loggedInUser
      const chatManager = new ChatManager({
        instanceLocator: process.env.VUE_APP_INSTANCE_LOCATOR,
        userId: this.user._id,
        tokenProvider: new TokenProvider({
          url: process.env.VUE_APP_TOKEN_PROVIDER
        }),
        connectionTimeout: 20000
      })
      chatManager
        .connect({
          onAddedToRoom: room => {
            this.rooms = [...this.rooms, room]
          }
        })
        .then(currentUser => {
          this.rooms = currentUser.rooms
          if (this.rooms.length >= 1) {
            this.connectToRoom(this.rooms[0].id)
          }
        })
        .catch(err => {
          this.$iziToast.error({
            title: 'Error!',
            message: err
          })
        })
    }
  },
  computed: {
    ...mapState(['isLoggedInUser'])
  }
}
</script>

<style scoped>
.current:hover {
  background: #f1f1f1;
}

.current .active {
  background: #f1f1f1;
}
</style>
