<!--
 * @Descripttion: 
 * @version: 
 * @Author: guanxiaoxin
 * @Date: 2021-02-22 09:32:13
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-02-22 10:45:25
 * @FilePath: /ams_pc/src/views/userManage/index.vue
-->
<template>
  <div class="guan">
    <a-form @submit="handleSubmit" :form="form" class="form">
      <a-row>
        <!-- 客户姓名 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="客户姓名">
            <a-input
              placeholder="请输入客户姓名"
              v-decorator="[
                'name',
                { rules: [{ required: true, message: '请输入客户姓名' }] },
              ]"
            />
          </a-form-item>
        </a-col>
        <!-- 主要联系电话 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="主要联系电话">
            <a-input
              placeholder="请输入主要联系电话"
              v-decorator="[
                'tel',
                { rules: [{ required: true, message: '请输入主要联系电话' }] },
              ]"
              disabled
            >
            </a-input>
          </a-form-item>
        </a-col>
        <!-- new  次要联系电话-->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="次要联系电话">
            <a-input
              placeholder="请输入次要联系电话"
              v-decorator="[
                'minorTel',
                {
                  rules: [
                    {
                      message: '请输入正确的手机号',
                      pattern: /^1[3456789]\d{9}$/,
                    },
                  ],
                },
              ]"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <!-- 性别 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="性别">
            <a-radio-group v-decorator="['sex']">
              <a-radio value="20011001"> 男 </a-radio>
              <a-radio value="20011002"> 女 </a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <!-- 来源渠道 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="来源渠道">
            <a-select placeholder="DCC" disabled> </a-select>
          </a-form-item>
        </a-col>
        <!-- 媒体 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="媒体">
            <a-select
              :options="sourceChannelList"
              v-decorator="[
                'getnew',
                { rules: [{ required: true, message: '请选择媒体' }] },
              ]"
            />
          </a-form-item>
        </a-col>
        <!-- 资金准备状况 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="资金准备状况">
            <a-select
              placeholder="请选择资金准备状况"
              :options="isMoney"
              v-decorator="[
                'fundState',
                { rules: [{ required: true, message: '请选择资金准备情况' }] },
              ]"
            >
            </a-select>
          </a-form-item>
        </a-col>
        <!-- 意向级别 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="意向级别">
            <a-select
              placeholder="请选择意向级别"
              :options="purpose"
              v-decorator="[
                'purpLevel',
                { rules: [{ required: true, message: '请选择意向级别' }] },
              ]"
            >
            </a-select>
          </a-form-item>
        </a-col>
        <!--new 意向车系 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="意向车系">
            <a-select
              placeholder="请选择意向车系"
              :options="recommendSystem1"
              v-decorator="['purpModels']"
            />
          </a-form-item>
        </a-col>
        <!-- 推荐车系 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="推荐车系">
            <a-select
              placeholder="请选择推荐车系"
              :options="recommendSystem"
              @change="changeOn"
              v-decorator="[
                'recomSeries',
                { rules: [{ required: true, message: '请选择推荐车系' }] },
              ]"
            />
          </a-form-item>
        </a-col>
        <!-- 推荐车型 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="推荐车型">
            <a-select
              placeholder="请选择推荐车型"
              :options="recommendModel"
              v-decorator="[
                'recomModel',
                { rules: [{ required: true, message: '请选择推荐车型' }] },
              ]"
            >
            </a-select>
          </a-form-item>
        </a-col>
        <!-- 首次接触内容 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="首次接触内容">
            <a-select
              mode="multiple"
              placeholder="请输入首次接触内容"
              :options="followUpContentList1"
              v-decorator="[
                'firstContents',
                { rules: [{ required: true, message: '请输入首次接触内容' }] },
              ]"
            >
              <!--<a-select placeholder="请输入"-->
              <!--:options="followUpContentList"-->
              <!--v-decorator="[ 'firstContents', {rules: [{ required: true, message: '请输入首次接触内容'}]} ]"-->
              <!--&gt;-->
            </a-select>
          </a-form-item>
        </a-col>
        <!--new 是否是基盘客户 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="是否是基盘客户">
            <a-radio-group
              v-decorator="[
                'labelText',
                {
                  rules: [{ required: true, message: '请输入是否是基盘客户' }],
                },
              ]"
              @change="changeIs()"
            >
              <a-radio value="10231003"> 是 </a-radio>
              <a-radio value="10231004"> 否 </a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>

        <!--new 姓名 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
          v-if="isJiPan"
        >
          <a-form-item label="姓名">
            <a-input
              placeholder="请输入基盘客户姓名"
              v-decorator="[
                'labelRmk1',
                { rules: [{ required: true, message: '请输入基盘客户姓名' }] },
              ]"
            />
          </a-form-item>
        </a-col>
        <!--new 电话 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
          v-if="isJiPan"
        >
          <a-form-item label="电话">
            <a-input
              placeholder="请输入基盘客户的电话"
              v-decorator="[
                'labelRmk2',
                {
                  rules: [
                    { required: true, message: '请输入基盘客户的电话' },
                    {
                      message: '请输入正确的手机号',
                      pattern: /^1[3456789]\d{9}$/,
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
        </a-col>
        <!-- 客户推荐信息 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="客户推荐信息">
            <a-input v-decorator="['name1']" disabled />
          </a-form-item>
        </a-col>

        <!-- 销售顾问 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="销售顾问">
            <a-select
              placeholder="请选择销售顾问"
              :options="cosname"
              v-decorator="['cosCode']"
            >
            </a-select>
          </a-form-item>
        </a-col>
        <!-- 备注 -->
        <a-col
          :xl="{ span: 8 }"
          :lg="{ span: 8 }"
          :md="{ span: 12 }"
          :sm="24"
          class="col_list"
        >
          <a-form-item label="备注">
            <a-textarea placeholder="请输入备注" v-decorator="['memo']">
            </a-textarea>
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item>
        <a-button htmlType="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import pick from "lodash.pick";
// import { dccApi } from "@/api/dccApi/dcc";

export default {
  name: "ClientInformation",
  props: {
    // carModel: {
    //   type: Array,
    //   default: [],
    // },
    // showSubmit: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      sourceChannelList: [],
      followUpContentList: [],
      followUpContentList1: [], // 处理后的下拉框
      isMoney: [],
      purpose: [],
      cosname: [],
      obj: {},
      recommendSystem: [],
      recommendSystem1: [],
      recommendModel: [],
      source: "",
      queryParam: {},
      isJiPan: false,
    };
  },
  created() {},
  methods: {
    initialize(obj) {
      this.form.resetFields();
      this.obj = obj;
      let arr = [
        10191001,
        10191002,
        10191003,
        10191006,
        10191007,
        10191008,
        10191011,
      ];
      setTimeout(() => {
        for (let i in arr) {
          for (let j in this.obj.followList) {
            if (arr[i] == this.obj.followList[j].value) {
              this.followUpContentList1.push({
                value: this.obj.followList[j].value,
                label: this.obj.followList[j].label,
              });
            }
          }
        }
        for (let i = 0; i < this.sourceChannelList.length; i++) {
          if (this.obj.dccType == this.sourceChannelList[i].value) {
            this.obj.getnew = this.sourceChannelList[i].label;
          } else {
          }
        }

        this.form.setFieldsValue(
          pick(obj, [
            "name",
            "tel",
            "dccType",
            "getnew",
            "sex",
            "labelText",
            "purpModels",
          ])
        );
      }, 0);
    },
    changeOn(val) {
      this.form.setFieldsValue({
        recomModel: undefined,
      });

      this.$emit("getChange", val);

      //   // 推荐车型
      //   for (let i = 0; i < this.carModel.length; i++) {
      //     if (val == this.carModel[i].id) {
      //       this.recommendModel = this.carModel[i].child.map((item) => {
      //         item.value = item.code;
      //         item.label = item.name;
      //         return item;
      //       });
      //     }
      //   }

      // dccApi.toDccFlowFiling().then((res) => {
      //
      //   // 客户信息
      //   if (res.returnCode === "1") {

      //     // this.sourceChannelList = res.result.dg_10031001.map((item) => {
      //     //   item.value = item.dataKey;
      //     //   item.label = item.dataName;
      //     //   return item;
      //     // });

      //     for (let i = 0; i < res.result.models.length; i++) {
      //       if (we === res.result.models[i].code) {
      //         this.recommendModel = res.result.models[i].child.map((item) => {
      //           item.value = item.code;
      //           item.label = item.name;
      //           return item;
      //         });
      //       }
      //     }
      //   }
      // });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification["error"]({
            message: "Received values of form:",
            description: values,
          });
        }
      });
    },
    // 基盘选择
    changeIs() {
      this.isJiPan = !this.isJiPan;
    },
  },
  witch: {},
};
</script>

<style scoped>
.guan {
  background-color: white;
}
.col_list {
  padding: 8px 24px;
}
</style>
