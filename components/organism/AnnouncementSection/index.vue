<template>
  <div
    v-if="!isLoading && announcement && announcement.name"
    class="max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"
  >
    <a
      :href="announcement.link"
      target="_blank"
      class="block w-full max-h-[100px] md:max-h-[200px] xl:max-h-[300px] overflow-hidden rounded-[6px] md:rounded-[8px] lg:rounded-[14px] xl:rounded-[20px]"
    >
      <img
        class="w-full max-h-[100px] md:max-h-[200px] xl:max-h-[300px] object-cover object-center"
        :id="`announcement-${announcement.id}`"
        alt="pengumuman"
      />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcement: {},
      isLoading: true,
    }
  },
  mounted() {
    this.getAnnouncement()
  },
  methods: {
    async getAnnouncement() {
      this.isLoading = true
      try {
        const getAnnouncement = await this.$axios.get('/customer/announcements')
        this.announcement = getAnnouncement.data.data
        if (this.announcement.name) {
          this.getPoster(this.announcement)
        }
      } catch (error) {
        console.log(error)
      }
      this.isLoading = false
    },
    async getPoster(announcement) {
      const fileName = announcement.fileName
      if (fileName) {
        const url = `bucket/images/announcement/${fileName}`
        await this.$axios
          .get(url, {
            responseType: 'blob',
          })
          .then((response) => {
            const responseType = response.headers['content-type']
            const responseData = response.data

            // Convert the response data to a Blob
            const blob = new Blob([responseData], { type: responseType })

            // Create a new File object with the Blob
            let imageFile = new File([blob], fileName, {
              type: responseType,
            })

            const srcImage = URL.createObjectURL(imageFile)
            const bannerImage = document.getElementById(
              `announcement-${announcement.id}`
            )
            bannerImage.src = srcImage
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
  },
}
</script>

<style></style>
