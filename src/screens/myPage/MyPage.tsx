import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import { useStateContext } from '~/context/user/UserContext';
import Colors from '~/values/color/Colors';

const MyInfo = ({ account }: { account?: IAccount }) => {
  return (
    <View style={styles.infoContiner}>
      <View style={styles.profileContiner}>
        <View style={styles.profileIcon}></View>
        <Text style={styles.profileText}>{account?.email || ''}</Text>
      </View>
      <Text style={[styles.profileText, { marginTop: 10 }]}>나는 뭐시기 저시기 ~~~</Text>
    </View>
  );
};

const MyPage = () => {
  const state = useStateContext();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <MyInfo account={state?.accountInfo} />
        <Text style={styles.profileText}>MyPage</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoContiner: { paddingVertical: 20, borderBottomWidth: 1, borderTopWidth: 1 },
  profileContiner: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 },
  profileIcon: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.gray },
  profileText: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default MyPage;
