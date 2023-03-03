import React from 'react'

const DetailCard = () => {
  return (
    <div class="flex text-white w-full items-center p-4 bg-purple-500 justify-between">
        <div class="flex items-center">
          {" "}
          <img class="w-5 h-5" src="/1946429.png" alt="" />
          <div class="ml-4">
            <p>Dummy Name</p>
            <p>Dummy dosomecoding.com</p>
          </div>
        </div>

        <div class="flex ">
          <img class="w-5 h-5" src="/edit-button.png" alt="" />
          <img class="w-5 h-5" src="/delete-icon.svg" alt="" />
        </div>
      </div>
  )
}

export default DetailCard